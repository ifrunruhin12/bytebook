# 📦 The Slice Capacity Growth Rules in Go

Go does not guarantee a strict rule for how slice capacity grows. But there is a pattern based on the Go runtime’s memory allocator strategy, which optimizes for speed and memory reuse. It’s not random, but it’s also not always linear or simple.

## 🔹 Rule 1: Capacity < 1024 → Double the capacity

If the current capacity is less than 1024:
```go
cap = cap * 2
```
But this doubling can sometimes skip a step if Go's allocator decides to round up to the next power-of-two or memory block size (especially for small allocations).

### Example
```go
s := make([]int, 50) // cap = 50
s = append(s, 1)     // cap becomes 112, not 100
```
Why? Go uses `runtime.growslice` under the hood, which often overallocates to align to size classes used by Go's allocator (which uses `mallocgc` behind the scenes).

So 112 is chosen because it matches the next available block size for reuse. Efficient memory reallocation > predictable growth

## 🔹 Rule 2: Capacity ≥ 1024 → Grow by ~25% chunks

```go
newcap := oldcap + oldcap/4
```

So:
    - [] 1024 → 1024 + 256 = 1280
    - [] But Go bumps it to 1536 because of memory allocator class alignment again (usually to avoid fragmentation and reuse existing allocation buckets)

## 🔹 Rule 3: Alignment to Size Classes

This is the hidden layer that messes with predictability. Go groups allocations into size classes, and sometimes grows a slice to the next class size even if it exceeds the calculated "double" or "25% increase".
These size classes are part of Go's `runtime/sizeclasses.go`. They are not public API but are roughly:
```bash
16, 32, 48, 64, 80, 96, 112, 128, ...
```
That’s why:
```go
cap 50 → append → cap becomes 112 (because 112 is next best fit)
```
## 🔎 So how do you predict it?

### You can approximate it like this:
```go
func growCap(oldCap int) int {
	if oldCap < 1024 {
		return nextSizeClass(oldCap * 2)
	}
	return nextSizeClass(oldCap + oldCap/4)
}

func nextSizeClass(n int) int {
	// These are simplified class sizes, not exact.
	classes := []int{16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192,
		208, 224, 240, 256, 320, 384, 448, 512, 576, 640,
		704, 768, 832, 896, 960, 1024, 1152, 1280, 1408,
		1536, 1792, 2048, 2304, 2560, 2816, 3072, 3328,
		3584, 3840, 4096, 4608, 5120, 5632, 6144, 6656,
		7168, 7680, 8192}

	for _, c := range classes {
		if c >= n {
			return c
		}
	}
	return n // fallback if class not found
}
```
That would get you very close to how Go grows slices.

## This can change anytime

The Go team can tweak the growth rules in future versions of Go to improve memory performance. So don’t rely on this behavior in production code for anything critical—just treat it as an optimization detail.

