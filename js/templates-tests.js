Ractive.defaults.templates["ux-accordion-default-three-accordions-static"] = {"v":3,"t":[{"t":7,"e":"ux-accordion","f":[{"t":7,"e":"ux-accordionitem","f":[{"t":7,"e":"ux-anchor","f":["Item 1"]}," ",{"t":7,"e":"ux-content","f":[{"t":7,"e":"h2","f":["First accordion item"]}]}]}," ",{"t":7,"e":"ux-accordionitem","f":[{"t":7,"e":"ux-anchor","f":["Item 2"]}," ",{"t":7,"e":"ux-content","f":[{"t":7,"e":"h2","f":["Second accordion item"]}]}]}," ",{"t":7,"e":"ux-accordionitem","f":[{"t":7,"e":"ux-anchor","f":["Item 3"]}," ",{"t":7,"e":"ux-content","f":[{"t":7,"e":"h2","f":["Third accordion item"]}]}]}]}]};
Ractive.defaults.templates["ux-anchor-extraDetails"] = {"v":3,"t":[{"t":7,"e":"ux-anchor","a":{"ariaLabel":"Label","role":"Role","target":"_new","href":"#newTab","tabIndex":"5","title":"Click this"},"f":["anchor text"]}]};
Ractive.defaults.templates["ux-pricingtable-templateDriven"] = {"v":3,"t":[{"t":7,"e":"ux-pricingtable","a":{"class":"table"},"f":[{"t":7,"e":"li","a":{"class":"title"},"f":["Standard"]}," ",{"t":7,"e":"li","a":{"class":"price"},"f":["$100"]}," ",{"t":7,"e":"li","a":{"class":"description"},"f":["good description"]}," ",{"t":7,"e":"li","a":{"class":"bullet-item"},"f":["1 Database"]}," ",{"t":7,"e":"li","a":{"class":"bullet-item"},"f":["5GB storage"]}," ",{"t":7,"e":"li","a":{"class":"bullet-item"},"f":["50 users"]}]}]};
Ractive.defaults.templates["ux-sub-nav-templateDriven"] = {"v":3,"t":[{"t":7,"e":"ux-sub-nav","a":{"title":"Filter"},"f":[{"t":7,"e":"dd","a":{"role":"menuitem","class":"active"},"f":[{"t":7,"e":"ux-anchor","a":{"href":"#"},"f":["All"]}]}," ",{"t":7,"e":"dd","a":{"role":"menuitem","class":"price"},"f":[{"t":7,"e":"ux-anchor","a":{"href":"#"},"f":["Active"]}]}," ",{"t":7,"e":"dd","a":{"role":"menuitem","class":"description"},"f":[{"t":7,"e":"ux-anchor","a":{"href":"#"},"f":["Pending"]}]}," ",{"t":7,"e":"dd","a":{"role":"menuitem","class":"bullet-item"},"f":[{"t":7,"e":"ux-anchor","a":{"href":"#"},"f":["Suspended"]}]}]}]};
Ractive.defaults.templates["ux-top-bar-3-template"] = {"v":3,"t":[{"t":7,"e":"ux-top-bar","a":{"title":"Test Title","class":"contain-to-grid mode"},"f":[{"t":7,"e":"ux-top-bar-items","a":{"class":"right"},"f":[{"t":7,"e":"li","a":{"class":"active"},"f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Right Button Active"]}]}," ",{"t":7,"e":"li","a":{"class":"has-dropdown not-click"},"f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Right nesting"]}," ",{"t":7,"e":"ux-top-bar-items","a":{"class":"dropdown"},"f":[{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["First link in dropdown"]}]}," ",{"t":7,"e":"li","a":{"class":"has-dropdown not-click"},"f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Second link with items"]}," ",{"t":7,"e":"ux-top-bar-items","a":{"class":"dropdown"},"f":[{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["nested item 1"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["nested item 2"]}]}," ",{"t":7,"e":"li","f":[{"t":7,"e":"a","a":{"href":"#"},"f":["nested item 3"]}]}]}]}," ",{"t":7,"e":"li","a":{"class":"active"},"f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Active link in dropdown"]}]}]}]}]}," ",{"t":7,"e":"ux-top-bar-items","a":{"class":"left"},"f":[{"t":7,"e":"li","a":{"href":"#"},"f":[{"t":7,"e":"a","a":{"href":"#"},"f":["Left Button"]}]}]}]}]};
Ractive.defaults.templates["equalizer-with-parent"] = {"v":3,"t":[{"t":7,"e":"style","f":[".container div {\n\tpadding: 20px 0;\n\tmargin-bottom: 10px;\n}\n.container .bordered {\n\tborder: 2px solid red;\n}"]}," ",{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"div","a":{"data-equalizer":"foo"},"f":[{"t":7,"e":"div","a":{"data-equalizer-watcher":"foo","class":"bordered test1"},"t1":"equalizer","f":[{"t":7,"e":"p","f":["line 1"]}," ",{"t":7,"e":"p","f":["line 2"]}," ",{"t":7,"e":"p","f":["line 3"]}]}," ",{"t":7,"e":"div","a":{"data-equalizer-watcher":"foo","class":"bordered test2"},"t1":"equalizer","f":[{"t":7,"e":"p","f":["line 1"]}]}]}," ",{"t":7,"e":"div","f":["Then using the same equalizer foo value but different divs:"]}," ",{"t":7,"e":"div","a":{"data-equalizer":"foo"},"f":[{"t":7,"e":"div","a":{"data-equalizer-watcher":"foo","class":"bordered test3"},"t1":"equalizer","f":[{"t":7,"e":"p","f":["line 1"]}," ",{"t":7,"e":"p","f":["line 2"]}]}," ",{"t":7,"e":"div","a":{"data-equalizer-watcher":"foo","class":"bordered test4"},"t1":"equalizer","f":[{"t":7,"e":"p","f":["line 1"]}]}]}]}]};
Ractive.defaults.templates["tooltip-example"] = {"v":3,"t":[{"t":7,"e":"div","a":{"class":"container"},"f":[{"t":7,"e":"span","o":{"n":"tooltip","a":[{"content":"Hello World!"}]},"a":{"tabindex":"0"},"f":["focus here"]}]}]};