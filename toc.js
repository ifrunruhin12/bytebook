// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="intro.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="golang/intro.html"><strong aria-hidden="true">2.</strong> Golang</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/go-with-habib-class-notes.html"><strong aria-hidden="true">2.1.</strong> Go With Habib Class Notes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-0-go-basics.html"><strong aria-hidden="true">2.1.1.</strong> Go Basics</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-16-package-scope.html"><strong aria-hidden="true">2.1.2.</strong> Class 16 - Package Scope</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-17-scope-example.html"><strong aria-hidden="true">2.1.3.</strong> Class 17 - Scope Example</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-18-variable-shadowing.html"><strong aria-hidden="true">2.1.4.</strong> Class 18 - Variable Shadowing</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-19-function-types.html"><strong aria-hidden="true">2.1.5.</strong> Class 19 - Function Types</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-20-init-function.html"><strong aria-hidden="true">2.1.6.</strong> Class 20 - Init Function</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-21-anonymous-func-and-iife.html"><strong aria-hidden="true">2.1.7.</strong> Class 21 - Anonymous Functions and IIFE</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-22-function-expression-example.html"><strong aria-hidden="true">2.1.8.</strong> Class 22 - Function Expression Example</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-23-fof-vs-hof.html"><strong aria-hidden="true">2.1.9.</strong> Class 23 - Function of Function vs Higher Order Function</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-24-internal-memory.html"><strong aria-hidden="true">2.1.10.</strong> Class 24 - Internal Memory</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-25-end-of-internal-memory.html"><strong aria-hidden="true">2.1.11.</strong> Class 25 - End of Internal Memory</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-26-closure.html"><strong aria-hidden="true">2.1.12.</strong> Class 26 - Closure</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-27-struct.html"><strong aria-hidden="true">2.1.13.</strong> Class 27 - Struct</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-28-receiver-function.html"><strong aria-hidden="true">2.1.14.</strong> Class 28 - Receiver Function</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-29-array.html"><strong aria-hidden="true">2.1.15.</strong> Class 29 - Array</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-30-pointers.html"><strong aria-hidden="true">2.1.16.</strong> Class 30 - Pointers</a></li><li class="chapter-item expanded "><a href="golang/go-with-habib-class-notes/class-31-slices.html"><strong aria-hidden="true">2.1.17.</strong> Class 31 - Slices</a></li></ol></li><li class="chapter-item expanded "><a href="golang/experiment/experiments.html"><strong aria-hidden="true">2.2.</strong> Experiments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="golang/experiment/blank-identifier.html"><strong aria-hidden="true">2.2.1.</strong> Blank Identifier</a></li><li class="chapter-item expanded "><a href="golang/experiment/init-function.html"><strong aria-hidden="true">2.2.2.</strong> Init Function</a></li><li class="chapter-item expanded "><a href="golang/experiment/partial-redeclaration.html"><strong aria-hidden="true">2.2.3.</strong> Partial Declaration</a></li><li class="chapter-item expanded "><a href="golang/experiment/pointer-experiment.html"><strong aria-hidden="true">2.2.4.</strong> Pointer Experiment</a></li><li class="chapter-item expanded "><a href="golang/experiment/slice-capacity.html"><strong aria-hidden="true">2.2.5.</strong> Slice Capacity testing</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
