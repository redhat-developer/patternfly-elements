function createIcon(iconName, color, size, circled) {
  if (typeof circled === "undefined") {
    circled = false;
  }
  var icon = document.createElement("pfe-icon");
  if (/^#/.exec(color)) {
    icon.style.setProperty("--pfe-icon--color", color);
  } else {
    icon.setAttribute("color", color);
  }

  if (size) {
    icon.setAttribute("size", size);
  }

  if (circled) {
    icon.setAttribute("circled", "");
  }

  icon.setAttribute("icon", iconName);
  return icon;
}

function printIcons(setName, colors, subset, size, circled) {
  var fragment = document.createDocumentFragment();
  icons[setName].map(function(iconName, itr, arr) {
    if ((subset > 0 && itr < subset) || subset == 0) {
      const iconEl = createIcon(iconName, getColor(itr, colors), size, circled);
      fragment.appendChild(iconEl);
    }
  });
  return fragment;
}

function getColor(itr, colors) {
  var iterator = itr % colors.length;
  return colors[iterator];
}

const icons = {
  web: [
    "web-alert-danger",
    "web-alert-default",
    "web-alert-info",
    "web-alert-success",
    "web-alert-warning",
    "web-arrow-right",
    "web-call",
    "web-caret-down",
    "web-caret-left",
    "web-caret-right",
    "web-caret-thin-down",
    "web-caret-thin-left",
    "web-caret-thin-right",
    "web-caret-thin-up",
    "web-caret-up",
    "web-cart",
    "web-check",
    "web-chevron",
    "web-close",
    "web-contact",
    "web-contact2",
    "web-copy",
    "web-dashboard",
    "web-envelope",
    "web-facebook",
    "web-fax",
    "web-github",
    "web-globe",
    "web-gplus",
    "web-grid-3x3",
    "web-grid",
    "web-instagram",
    "web-key",
    "web-laptop",
    "web-link",
    "web-linkedin",
    "web-list-form",
    "web-list",
    "web-mobile-menu",
    "web-new-window",
    "web-open-quote",
    "web-open",
    "web-plus",
    "web-print",
    "web-reddit",
    "web-rss",
    "web-search",
    "web-tab-arrow",
    "web-tumblr",
    "web-twitter",
    "web-upload",
    "web-user",
    "web-youtube",
    "web-youtube2"
  ],
  rh: [
    "rh-aed",
    "rh-alert-downtime",
    "rh-api",
    "rh-app-b",
    "rh-application-alt",
    "rh-application-mobile",
    "rh-application-window",
    "rh-application",
    "rh-arrows-simplify",
    "rh-atom",
    "rh-award-ribbon",
    "rh-bar-graph",
    "rh-battery",
    "rh-beer-glasses",
    "rh-bike",
    "rh-blueprint",
    "rh-book",
    "rh-box-open",
    "rh-bus-front-view",
    "rh-bus-side-view",
    "rh-calculator",
    "rh-calendar",
    "rh-can",
    "rh-cardboardrecycling",
    "rh-catalog-selfservice",
    "rh-cd-disk",
    "rh-check-yes",
    "rh-circle-sphere",
    "rh-circuit",
    "rh-clock-time-pass",
    "rh-clock",
    "rh-cloud-admin",
    "rh-cloud-mobile",
    "rh-cloud",
    "rh-code",
    "rh-collaboration",
    "rh-command",
    "rh-compass",
    "rh-competitive-analysis",
    "rh-complexity",
    "rh-construction-hard-hat",
    "rh-container-library",
    "rh-control-panel",
    "rh-create-cloud",
    "rh-credit-card",
    "rh-cube",
    "rh-customer-snapshot",
    "rh-data",
    "rh-datacenter-alt1",
    "rh-datacenter",
    "rh-desktop",
    "rh-development-model",
    "rh-devops",
    "rh-dna",
    "rh-download",
    "rh-eBook",
    "rh-electrical",
    "rh-elevator-up-down",
    "rh-email",
    "rh-emergency-use-stairs",
    "rh-enclave",
    "rh-enclave2",
    "rh-envelope-back",
    "rh-ewaste-recycling",
    "rh-ex-no",
    "rh-fan",
    "rh-fast-car",
    "rh-fast-jet",
    "rh-feather",
    "rh-finance",
    "rh-fire-extinguisher",
    "rh-folder-open",
    "rh-frame",
    "rh-funnel",
    "rh-gear",
    "rh-gears",
    "rh-glass-bottle",
    "rh-glass-recycling",
    "rh-global-ecosystem",
    "rh-globe-atlantic",
    "rh-globe-pacific",
    "rh-government",
    "rh-handicapped-accessible",
    "rh-health-vertical",
    "rh-heart-monitor",
    "rh-help-desk",
    "rh-host",
    "rh-hosting-support",
    "rh-icecaps-mountain",
    "rh-increase-productivity",
    "rh-industry",
    "rh-info-alt",
    "rh-info",
    "rh-instructor",
    "rh-insurance",
    "rh-interoperable-cross-platform",
    "rh-key",
    "rh-kiosk",
    "rh-lab-flask",
    "rh-lab",
    "rh-laptop",
    "rh-leaf",
    "rh-lifestyle",
    "rh-lightbulb-energy-efficient",
    "rh-lightbulb-traditional",
    "rh-lock",
    "rh-locked",
    "rh-mail",
    "rh-mainframe",
    "rh-management-checklist",
    "rh-map-treasure",
    "rh-media-clapboard",
    "rh-megaphone",
    "rh-message-oriented-middleware",
    "rh-mobile-devices",
    "rh-mobile-user",
    "rh-monitor",
    "rh-mothers-room",
    "rh-moving",
    "rh-network-community",
    "rh-network-personal",
    "rh-network-switch",
    "rh-network",
    "rh-no-smoking",
    "rh-noise-isolation",
    "rh-noise",
    "rh-notepad",
    "rh-odor",
    "rh-office-building-smb",
    "rh-office-chair",
    "rh-office-desk",
    "rh-office-mobility",
    "rh-office-reception",
    "rh-ohc-cloud-apps",
    "rh-ohc-hybrid-cloud",
    "rh-ohc-iaas",
    "rh-ohc-paas",
    "rh-ohc-private-cloud",
    "rh-ohc-public-cloud",
    "rh-orchestration",
    "rh-organization",
    "rh-packing",
    "rh-paper-case-study",
    "rh-paper-infographic",
    "rh-paper-lined",
    "rh-paper-solution",
    "rh-paper",
    "rh-paperrecycling",
    "rh-parking",
    "rh-partner-map",
    "rh-phone-land-line",
    "rh-phone-mobile",
    "rh-photo-frame-family",
    "rh-piggy-bank",
    "rh-plastic-bottle",
    "rh-podium-speakers",
    "rh-policy",
    "rh-price-label",
    "rh-printer-3d",
    "rh-printer-copier",
    "rh-process-improvement",
    "rh-process",
    "rh-processor",
    "rh-protected",
    "rh-puzzle-complete",
    "rh-puzzle-piece",
    "rh-pyramid",
    "rh-radio-podcast",
    "rh-recycle-cans",
    "rh-recycle-plastic",
    "rh-recycle",
    "rh-restrooms",
    "rh-safety-warning-alert",
    "rh-scalable",
    "rh-scale-grow",
    "rh-scale-shrink",
    "rh-search",
    "rh-security",
    "rh-server-alt1",
    "rh-server-alt2",
    "rh-server-deploy",
    "rh-server-stack-alt1",
    "rh-server-stack-alt2",
    "rh-server-stack",
    "rh-server-vintage-alt1",
    "rh-server-vintage",
    "rh-server",
    "rh-shipping-container-rail",
    "rh-shipping-container-ship",
    "rh-shipping-container-truck",
    "rh-shipping-container",
    "rh-shopping-bag",
    "rh-shopping-cart",
    "rh-smart-phone",
    "rh-software-container",
    "rh-space-rocket",
    "rh-speedometer",
    "rh-sports-play",
    "rh-stairs-step-by-step",
    "rh-star",
    "rh-stopwatch-time-pass",
    "rh-stopwatch",
    "rh-storage-brick",
    "rh-storage-stack",
    "rh-sun",
    "rh-tachometer",
    "rh-talk-bubble-conversation",
    "rh-talk-bubble-lined",
    "rh-talk-bubble",
    "rh-telecom-vertical",
    "rh-thumbs-up",
    "rh-toolbox",
    "rh-tools-drafting",
    "rh-tools",
    "rh-transportation",
    "rh-trash",
    "rh-trophy",
    "rh-upload",
    "rh-user-1",
    "rh-user-2",
    "rh-user-3",
    "rh-user-4",
    "rh-user-5",
    "rh-user-access",
    "rh-user-checklist",
    "rh-user-schedule",
    "rh-utensils",
    "rh-utility-meter",
    "rh-venn-diagram",
    "rh-video",
    "rh-virtual-datacenter",
    "rh-virtual-server",
    "rh-virtual-stack",
    "rh-virtual-storage-brick",
    "rh-virtual-storage-stack",
    "rh-volume-mute",
    "rh-volume-up",
    "rh-vulnerability",
    "rh-water-droplet",
    "rh-water-faucet",
    "rh-waveform",
    "rh-webinar",
    "rh-workplace-strategy",
    "rh-wrench-mechanical"
  ]
};
