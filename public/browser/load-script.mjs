class LoadScript extends HTMLElement {
  static observedAttributes = ["src", "load-on"];

  constructor() {
    super();
    this._scriptLoaded = false;
    this._eventListener = null;
    this._visibleObserver = null;
  }

  get scriptLoaded() {
    return this._scriptLoaded;
  }

  set scriptLoaded(value) {
    this._scriptLoaded = value;
    this.cleanup();
  }

  connectedCallback() {
    this.handleLoad();
  }

  disconnectedCallback() {
    this.cleanup();
  }

  handleLoad() {
    const src = this.getAttribute("src");
    const loadOn = this.getAttribute("load-on");

    if (src && !this.scriptLoaded) {
      switch (loadOn) {
        case "idle": {
          this.loadOnIdle();
          break;
        }
        case "hover": {
          this.loadOnParentHover();
          break;
        }
        case "visible": {
          this.loadOnParentVisible();
          break;
        }
        default:
          this.loadScript();
      }
    }
  }

  loadScript() {
    const src = this.getAttribute("src");

    if (src && document.querySelectorAll(`script[src="${src}"]`).length === 0) {
      const script = document.createElement("script");
      script.src = src;
      script.type = "module";
      script.onerror = () => console.error(`Error loading script ${src}.`);
      document.body.appendChild(script);
      this.scriptLoaded = true;
    }

    if (!src) {
      console.warn("No src attribute found on load-script element");
    }
  }

  loadOnParentVisible() {
    this._visibleObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.loadScript();
          this._visibleObserver.disconnect();
        }
      }
    });

    this.parentElement && this._visibleObserver.observe(this.parentElement);
  }

  loadOnParentHover() {
    this._eventListener = this.parentElement?.addEventListener(
      "mouseover",
      () => {
        this.loadScript();
      }
    );
  }

  loadOnIdle() {
    requestIdleCallback(() => {
      this.loadScript();
    });
  }

  cleanup() {
    if (this._visibleObserver) {
      this._visibleObserver.disconnect();
      this._visibleObserver = null;
    }
    if (this._eventListener) {
      this.parentElement?.removeEventListener("mouseover", this._eventListener);
      this._eventListener = null;
    }
  }
}

customElements.define("load-script", LoadScript);
