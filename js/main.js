// Menu Data (Provided)
const menuData = [
    {
        label: "Projects",
        submenu: [
            {
                label: "NdaY' Radoko",
                image: "./assets/images/Projects/NdaY_Radoko.png",
                summary: "An AI-powered solution enhancing healthcare systems",
                description: [
                    "A cutting-edge AI-driven platform designed to improve healthcare systems by leveraging advanced diagnostics, patient care, and resource management.",
                    "Equipped with the IMCI (Integrated Management of Childhood Illness) Booklet.",
                    "NdaY' Radoko drones serve as virtual health assistants, capable of traveling directly to households to assess, classify, treat, and counsel mothers of infants under 3 months.",
                    "It also provides guidance to community health workers for children under 5 years."
                ],
                testimony: {
                    text: `Nanampy ireo menavava kelinay i drone NdaY'Radoko.
                    Mba tsy entina eny @ tobipahasalamana alavitra ny tokantrano.
                    NdaY' Radoko no nandray ny anjara fanompoana,
                    tsy reraka no tsy lany fotoana hanaraka ny fahasalamany.`,
                    source: "Bozy, Maman'i Botakely any Tanàna ambanivohitr'i Basalampy",
                    photo: "./assets/images/Projects/Testimonies/NdaY_Mom.png"
                },
                link: "https://nday.mg/nday_radoko"
            },
            {
                label: "NdaY' Ben'ny Tanàna",
                image: "./assets/images/Projects/NdaY_Ben_Tanana.png",
                summary: "A digital service governance platform for local authorities and citizens",
                description: [
                    "A digital service governance platform designed to bridge the gap between local authorities and citizens.",
                    "Facilitates transparent communication and efficient service delivery.",
                    "Empowers local communities to engage with their governments effectively.",
                    "Delivered anywhere legal, trusted and unforged birth certificate to the citizens."
                ],
                testimony: {
                    text: "Tato an-trano dia efa nahazo dika mitovy ny fanamarinam-pahaterahana!",
                    source: "Ingahy Solo Lehibe, Ben'ny Tanàna Tsy tononina aloha",
                    photo: "./assets/images/Projects/Testimonies/NdaY_Mayor.jpeg"
                },
                link: "https://nday.mg/nday_bentanana"
            },
            {
                label: "NdaY' Fako",
                image: "./assets/images/Projects/NdaY_Fako.png",
                summary: "<strong>NdaY' Fako</strong> is a cutting-edge digital platform designed to transform waste management and public services, while aligning with the vision of a connected world enjoying a high standard of living. By empowering Mayors and local governments, the platform enhances the delivery of critical WASH (Water, Sanitation, and Hygiene) services and extends these solutions directly to households.",
                description: [
                    "At its core, <strong>NdaY' Fako</strong> harnesses smartphones and QR codes to modernize the management of bins,",
                    "optimize collection processes, and guarantee safety and security for community members.",
                    "The solution promotes proximity services by bringing essential sanitation and hygiene services directly to people’s doors.",
                    "Through innovative features, such as real-time tracking of waste collectors, secure bin identification via QR codes, and smart data integration, <strong>NdaY' Fako</strong> strengthens municipal operations and citizen engagement, contributing to healthier and safer living environments for all."
                ],
                testimony: {
                    text: "NdaY' Fako is helping us to more clean and care about sorted waste that can be recycled according theirs sortings.",
                    source: "Householder, at Alasora's Mayor, Antananarivo Avaradrano",
                    photo: "./assets/images/Projects/Testimonies/NdaY_household.jpg"
                },
                link: "https://nday.mg/nday_fako"
            },
            {
                label: "NdaY' Hety",
                image: "./assets/images/Projects/NdaY_Hety.png",
                summary: "A digital platform for Haircut/style services performed at home",
                description: [
                    "A premier doorstep hairstyling service that embodies the vision of a connected world enjoying a high standard of life.",
                    "Facilitates the haircut and style services for people struggling with theirs agendas.",
                    "Empowers Hotel, Hostel and B&B for clients just arrived with busy agendas.",
                    "Delivered at the local choosen by the client, trusted and secured and in timeline."
                ],
                testimony: {
                    text: "Ato an-trano dia efa mibika @ ny volonay, izahay!",
                    source: "Salohy Jejo, at CRAL Ampitatafika, Antananarivo Atsimondrano",
                    photo: "./assets/images/Projects/Testimonies/NdaY_Jejo.png"
                },
                link: "https://nday.mg/nday_hety"
            }
        ]
    },
    {
        label: "News",
        submenu: [
            {
                label: "NdaY' Latest News",
                image: "./assets/images/News/NdaY_Latest_News.png",
                description: "NdaY' is launching two projects: NdaY'Radoko, NdaY'BenTanana to apply for the POSEAM 2025.",
                testimony: "NDaY'Fako was launched in 2023 with AFS , and NdaY'Radoko and NdaY'BenTanana are the latest projects to be launched in 2025."
            },
            {
                label: "We are hiring!",
                image: "./assets/images/News/NdaY_Announcements.png",
                description: `Join the NdaY'innovation team 
                for the NdaY'Radoko project working on a groundbreaking drone-based IMCI
                health solution for infants in rural Madagascar.
                Positions are remote and freelance-based.`,
                testimony: "Be part of a mission that saves lives using cutting-edge technology. Apply your skills to bring healthcare to hard-to-reach communities and make a real impact."
            }
        ]
    },
    {
        label: "About NdaY'",
        submenu: [
            {
                label: "NdaY' Team",
                image: "./assets/images/About/NdaY_Team.png",
                description: "Meet the team behind NdaY'.",
                testimony: "Feedback about our team."
            },
            {
                label: "Where we work",
                image: "./assets/images/About/NdaY_Where_Works.png",
                description: "Important updates and announcements.",
                testimony: "User feedback on announcements."
            }
        ]
    }
];

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing menu...");
    initializeHorizontalMenu();
    addGlobalClickListener();
    addStickyHeaderBehavior();
});

// Menu Initialization
function initializeHorizontalMenu() {
    const menuContainer = document.getElementById("horizontal-menu");
    const contentContainer = document.getElementById("content-container");
    if (!menuContainer || !contentContainer) {
        console.error("Menu or content container not found!");
        return;
    }

    menuContainer.innerHTML = "";
    let activeMenuItemContainer = null;
    let hideTimeout = null;

    function closeAllMenus(excludeContainer = null) {
        menuContainer.querySelectorAll(".menu-item-container").forEach((container) => {
            if (container !== excludeContainer) {
                const submenu = container.querySelector(".submenu-container");
                if (submenu) submenu.classList.remove("active");
                const projectContent = container.querySelector(".project-content");
                if (projectContent) {
                    projectContent.classList.remove("active");
                    container.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                }
            }
        });
        contentContainer.innerHTML = "";
        contentContainer.classList.remove("active");
        document.body.classList.remove("hide-background");
        closeOverlay();
    }

    function toggleBackground(hide = true) {
        document.body.classList.toggle("hide-background", hide);
    }

    function closeOverlay() {
        const overlay = document.querySelector(".content-overlay");
        if (overlay) {
            overlay.classList.remove("active");
            setTimeout(() => overlay.remove(), 500); // Match CSS transition
        }
    }

    menuData.forEach((menuItem) => {
        const menuItemContainer = document.createElement("div");
        menuItemContainer.className = `menu-item-container ${menuItem.label === "Projects" ? "projects-menu" : ""}`;

        const menuButton = document.createElement("button");
        menuButton.className = "menu-item";
        menuButton.textContent = menuItem.label;

        const submenuContainer = document.createElement("div");
        submenuContainer.className = `submenu-container ${menuItem.label === "Projects" ? "projects-submenu" : ""}`;

        let projectContent = null;

        if (menuItem.label === "Projects") {
            projectContent = document.createElement("div");
            projectContent.className = "project-content";
            submenuContainer.appendChild(projectContent);
        }

        menuItemContainer.addEventListener("mouseenter", () => {
            console.log(`Entering ${menuItem.label}`);
            clearTimeout(hideTimeout);
            closeAllMenus(menuItemContainer);
            submenuContainer.classList.add("active");
            activeMenuItemContainer = menuItemContainer;
            toggleBackground(true);
        });

        menuItemContainer.addEventListener("mouseleave", (event) => {
            if (!menuContainer.contains(event.relatedTarget) && !contentContainer.contains(event.relatedTarget)) {
                console.log("Leaving menu, scheduling close");
                hideTimeout = setTimeout(() => {
                    if (!contentContainer.contains(document.elementFromPoint(event.clientX, event.clientY))) {
                        closeAllMenus();
                        activeMenuItemContainer = null;
                        toggleBackground(false);
                    }
                }, 200);
            }
        });

        if (window.innerWidth <= 768) {
            let lastClick = 0;
            menuButton.addEventListener("click", (event) => {
                event.preventDefault();
                const now = Date.now();
                if (now - lastClick < 300) return;
                lastClick = now;

                const isActive = submenuContainer.classList.contains("active");
                closeAllMenus(isActive ? null : menuItemContainer);
                submenuContainer.classList.toggle("active");
                toggleBackground(submenuContainer.classList.contains("active"));
            });
        }

        menuItem.submenu.forEach((submenuItem, index) => {
            const submenuButton = document.createElement("button");
            submenuButton.className = "submenu-item";
            submenuButton.textContent = submenuItem.label;

            if (menuItem.label === "Projects") {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked Projects: ${submenuItem.label}`);
                    // Special handling for NdaY'Ben'Tanàna - show interactive modal
                    if (submenuItem.label === "NdaY' Ben'ny Tanàna") {
                        showNdayBenTananaModal();
                        return;
                    }
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                    toggleBackground(true);
                });
                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered Projects: ${submenuItem.label}`);
                    // Special handling for NdaY'Ben'Tanàna - show interactive modal on hover
                    if (submenuItem.label === "NdaY' Ben'ny Tanàna") {
                        showNdayBenTananaModal();
                        return;
                    }
                    updateProjectContent(submenuItem, projectContent, submenuButton);
                    toggleBackground(true);
                });
            } else {
                submenuButton.addEventListener("click", () => {
                    console.log(`Clicked Non-Projects: ${submenuItem.label}`);
                    displayContent(submenuItem, true);
                    submenuContainer.classList.add("active");
                    toggleBackground(true);
                    submenuContainer.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                    submenuButton.classList.add("active");
                });
                submenuButton.addEventListener("mouseenter", () => {
                    console.log(`Hovered Non-Projects: ${submenuItem.label}`);
                    displayContent(submenuItem, true);
                    submenuContainer.classList.add("active");
                    toggleBackground(true);
                    submenuContainer.querySelectorAll(".submenu-item").forEach((btn) => btn.classList.remove("active"));
                    submenuButton.classList.add("active");
                });
            }

            submenuContainer.appendChild(submenuButton);
        });

        menuItemContainer.appendChild(menuButton);
        menuItemContainer.appendChild(submenuContainer);
        menuContainer.appendChild(menuItemContainer);
    });

    contentContainer.addEventListener("mouseenter", () => {
        console.log("Entering content container");
        clearTimeout(hideTimeout);
        if (activeMenuItemContainer && !activeMenuItemContainer.classList.contains("projects-menu")) {
            activeMenuItemContainer.querySelector(".submenu-container")?.classList.add("active");
            toggleBackground(true);
        }
    });

    contentContainer.addEventListener("mouseleave", (event) => {
        if (!menuContainer.contains(event.relatedTarget) && !document.querySelector(".content-overlay")?.contains(event.relatedTarget)) {
            console.log("Leaving content container, scheduling close");
            hideTimeout = setTimeout(() => {
                if (!contentContainer.contains(document.elementFromPoint(event.clientX, event.clientY))) {
                    closeAllMenus();
                    toggleBackground(false);
                }
            }, 200);
        }
    });
}

// Project Content Update (Projects)
function updateProjectContent(submenuItem, projectContent, submenuButton) {
    if (!projectContent || !submenuButton.parentElement) {
        console.error("Project content or submenu button not found!");
        return;
    }

    projectContent.innerHTML = "";
    submenuButton.parentElement.querySelectorAll(".submenu-item").forEach((sib) => sib.classList.remove("active"));
    submenuButton.classList.add("active");

    const buttonRect = submenuButton.getBoundingClientRect();
    const submenuRect = submenuButton.parentElement.getBoundingClientRect();
    const menuContainer = document.getElementById("horizontal-menu");
    const menuRect = menuContainer.getBoundingClientRect();
    projectContent.style.top = `${buttonRect.top - menuRect.top}px`;

    const contentWidth = 800;
    const viewportWidth = window.innerWidth;
    const submenuRight = submenuRect.left + parseInt(getComputedStyle(submenuButton.parentElement).width) + contentWidth + 10;
    projectContent.style.left = submenuRight > viewportWidth ? `-${contentWidth + 10}px` : `${parseInt(getComputedStyle(submenuButton.parentElement).width) + 10}px`;

    const imageBox = document.createElement("div");
    imageBox.className = "content-box image-box";
    const imageLink = document.createElement("a");
    imageLink.href = submenuItem.link || "#";
    imageLink.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    imageLink.appendChild(image);
    imageBox.appendChild(imageLink);
    projectContent.appendChild(imageBox);

    const summaryBox = document.createElement("div");
    summaryBox.className = "content-box summary-box";
    const summary = document.createElement("p");
    summary.innerHTML = submenuItem.summary || "No summary";
    summaryBox.appendChild(summary);
    projectContent.appendChild(summaryBox);

    const descriptionBox = document.createElement("div");
    descriptionBox.className = "content-box description-box";
    (submenuItem.description || ["No description"]).forEach((desc) => {
        const p = document.createElement("p");
        p.textContent = desc;
        descriptionBox.appendChild(p);
    });
    projectContent.appendChild(descriptionBox);

    const testimonyBox = document.createElement("div");
    testimonyBox.className = "content-box testimony-box";
    const testimonyText = document.createElement("div");
    testimonyText.className = "testimony-text";
    testimonyText.innerHTML = `<em>${submenuItem.testimony?.text || "No testimony"}</em>`;
    testimonyBox.appendChild(testimonyText);
    const testimonySource = document.createElement("div");
    testimonySource.className = "testimony-source";
    testimonySource.textContent = submenuItem.testimony?.source || "Anonymous";
    testimonyBox.appendChild(testimonySource);
    if (submenuItem.testimony?.photo) {
        const testimonyPhoto = document.createElement("div");
        testimonyPhoto.className = "testimony-photo";
        testimonyPhoto.style.backgroundImage = `url(${submenuItem.testimony.photo})`;
        testimonyBox.appendChild(testimonyPhoto);
    }
    projectContent.appendChild(testimonyBox);

    projectContent.classList.add("active");
    toggleBackground(true);
}

// Content Display (Non-Projects)
function displayContent(submenuItem, imageOnly = false) {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    contentContainer.innerHTML = "";
    const projectBox = document.createElement("div");
    projectBox.className = `project-box ${imageOnly ? "image-only" : ""}`;

    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    image.className = "project-image";
    image.setAttribute("aria-label", `View details for ${submenuItem.label}`);
    projectBox.appendChild(image);

    if (!imageOnly) {
        const title = document.createElement("h3");
        title.textContent = submenuItem.label || "No title";
        projectBox.appendChild(title);

        const description = document.createElement("p");
        description.textContent = Array.isArray(submenuItem.description) ? submenuItem.description.join(" ") : submenuItem.description || "No description";
        projectBox.appendChild(description);

        const testimonial = document.createElement("p");
        testimonial.innerHTML = `<em>${submenuItem.testimony || "No testimony"}</em>`;
        projectBox.appendChild(testimonial);

        if (submenuItem.link) {
            const link = document.createElement("a");
            link.href = submenuItem.link;
            link.textContent = `Learn more about ${submenuItem.label}`;
            link.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
            projectBox.appendChild(link);
        }
    } else {
        image.addEventListener("click", () => {
            console.log(`Image clicked: ${submenuItem.label}`);
            showContentOverlay(submenuItem);
        });
    }

    contentContainer.appendChild(projectBox);
    contentContainer.classList.add("active");
    toggleBackground(true);
}

// Content Overlay
function showContentOverlay(submenuItem) {
    closeOverlay();

    const overlay = document.createElement("div");
    overlay.className = "content-overlay";

    const image = document.createElement("img");
    image.src = submenuItem.image || "default.jpg";
    image.alt = submenuItem.label || "No title";
    overlay.appendChild(image);

    const title = document.createElement("h3");
    title.textContent = submenuItem.label || "No title";
    overlay.appendChild(title);

    const description = document.createElement("p");
    description.textContent = Array.isArray(submenuItem.description) ? submenuItem.description.join(" ") : submenuItem.description || "No description";
    overlay.appendChild(description);

    const testimonial = document.createElement("p");
    testimonial.innerHTML = `<em>${submenuItem.testimony?.text || submenuItem.testimony || "No testimony"}</em>`;
    overlay.appendChild(testimonial);

    if (submenuItem.testimony?.source) {
        const source = document.createElement("p");
        source.textContent = submenuItem.testimony.source;
        overlay.appendChild(source);
    }

    if (submenuItem.link) {
        const link = document.createElement("a");
        link.href = submenuItem.link;
        link.textContent = `Learn more about ${submenuItem.label}`;
        link.setAttribute("aria-label", `Visit ${submenuItem.label} webpage`);
        overlay.appendChild(link);
    }

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.setAttribute("aria-label", "Close content overlay");
    closeButton.onclick = closeOverlay;
    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("active"), 0);
    toggleBackground(true);
}

// Global Click Listener
function addGlobalClickListener() {
    const contentContainer = document.getElementById("content-container");
    if (!contentContainer) {
        console.error("Content container not found!");
        return;
    }

    document.addEventListener("click", (event) => {
        const isClickInsideContent = contentContainer.contains(event.target);
        const isClickInsideMenu = event.target.closest(".menu-item-container");
        const isClickInsideOverlay = event.target.closest(".content-overlay");
        if (!isClickInsideContent && !isClickInsideMenu && !isClickInsideOverlay) {
            console.log("Outside click, closing menus");
            closeAllMenus();
            toggleBackground(false);
        }
    });
}

// NdaY'Ben'Tanàna Interactive Modal
function showNdayBenTananaModal() {
    // Close any existing overlay first
    closeOverlay();

    const overlay = document.createElement("div");
    overlay.className = "content-overlay nday-bentanana-modal";

    // Check if mock data is available
    if (typeof ndayBenTananaMockData === 'undefined') {
        console.error("NdaY'Ben'Tanàna mock data not loaded");
        overlay.innerHTML = `
            <div class="nday-modal-container">
                <h2>NdaY' Ben'ny Tanàna</h2>
                <p>Loading platform data...</p>
                <button onclick="closeOverlay()" class="close-btn">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add("active"), 0);
        return;
    }

    const mockData = ndayBenTananaMockData;
    
    overlay.innerHTML = `
        <div class="nday-modal-container">
            <div class="nday-modal-header">
                <img src="./assets/images/Projects/NdaY_Ben_Tanana.png" alt="NdaY' Ben'ny Tanàna" class="modal-project-image">
                <div class="modal-title-section">
                    <h2>NdaY' Ben'ny Tanàna</h2>
                    <p class="modal-subtitle">Municipal Digital Governance Platform</p>
                </div>
                <button onclick="closeOverlay()" class="close-btn" aria-label="Close modal">×</button>
            </div>

            <div class="nday-modal-content">
                <!-- Navigation Tabs -->
                <div class="modal-tabs">
                    <button class="tab-btn active" onclick="switchNdayTab('overview')">Overview</button>
                    <button class="tab-btn" onclick="switchNdayTab('services')">Services</button>
                    <button class="tab-btn" onclick="switchNdayTab('statistics')">Statistics</button>
                    <button class="tab-btn" onclick="switchNdayTab('demo')">Live Demo</button>
                </div>

                <!-- Tab Content -->
                <div class="modal-tab-content">
                    <!-- Overview Tab -->
                    <div id="nday-tab-overview" class="tab-content active">
                        <div class="municipality-info">
                            <h3>Municipality Information</h3>
                            <div class="info-grid">
                                <div class="info-item">
                                    <strong>Municipality:</strong> ${mockData.municipality.name}
                                </div>
                                <div class="info-item">
                                    <strong>Mayor:</strong> ${mockData.municipality.mayor}
                                </div>
                                <div class="info-item">
                                    <strong>Total Properties:</strong> ${mockData.municipality.totalProperties}
                                </div>
                                <div class="info-item">
                                    <strong>Total Taxpayers:</strong> ${mockData.municipality.totalTaxpayers}
                                </div>
                                <div class="info-item">
                                    <strong>Collection Rate:</strong> ${mockData.municipality.collectionRate}
                                </div>
                            </div>
                        </div>

                        <div class="recent-activities">
                            <h3>Recent Activities</h3>
                            ${mockData.recentActivities.map(activity => `
                                <div class="activity-item">
                                    <span class="activity-date">${activity.date}</span>
                                    <span class="activity-type ${activity.type}">${activity.type.toUpperCase()}</span>
                                    <span class="activity-desc">${activity.description}</span>
                                    <span class="activity-amount">${activity.amount}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Services Tab -->
                    <div id="nday-tab-services" class="tab-content">
                        <h3>Available Services</h3>
                        <div class="services-grid">
                            ${Object.values(mockData.services).map(service => `
                                <div class="service-card">
                                    <h4>${service.name}</h4>
                                    <p>${service.description}</p>
                                    <div class="service-features">
                                        ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                                    </div>
                                    <div class="service-details">
                                        <span><strong>Processing:</strong> ${service.processingTime}</span>
                                        <span><strong>Cost:</strong> ${service.cost}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Statistics Tab -->
                    <div id="nday-tab-statistics" class="tab-content">
                        <h3>Platform Statistics</h3>
                        <div class="stats-grid">
                            <div class="stat-card">
                                <h4>Total Users</h4>
                                <span class="stat-number">${mockData.statistics.totalUsers}</span>
                            </div>
                            <div class="stat-card">
                                <h4>Total Transactions</h4>
                                <span class="stat-number">${mockData.statistics.totalTransactions}</span>
                            </div>
                            <div class="stat-card">
                                <h4>Total Revenue</h4>
                                <span class="stat-number">${mockData.statistics.totalRevenue}</span>
                            </div>
                            <div class="stat-card">
                                <h4>Digital Adoption</h4>
                                <span class="stat-number">${mockData.statistics.digitalAdoptionRate}</span>
                            </div>
                            <div class="stat-card">
                                <h4>Avg Processing Time</h4>
                                <span class="stat-number">${mockData.statistics.averageProcessingTime}</span>
                            </div>
                            <div class="stat-card">
                                <h4>User Satisfaction</h4>
                                <span class="stat-number">${mockData.statistics.userSatisfactionRate}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Demo Tab -->
                    <div id="nday-tab-demo" class="tab-content">
                        <h3>Interactive Demo</h3>
                        <div class="demo-section">
                            <div class="demo-login">
                                <h4>Select User Type:</h4>
                                <div class="demo-user-buttons">
                                    <button onclick="showDemoUser('citizen')" class="demo-btn citizen-btn">Citizen Portal</button>
                                    <button onclick="showDemoUser('mayor')" class="demo-btn mayor-btn">Mayor Dashboard</button>
                                </div>
                            </div>
                            <div id="demo-content" class="demo-content">
                                <p>Select a user type above to explore the platform features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="nday-modal-footer">
                <p><em>"Tato an-trano dia efa nahazo dika mitovy ny fanamarinam-pahaterahana!"</em></p>
                <p class="testimony-source">- Ingahy Solo Lehibe, Ben'ny Tanàna</p>
                <a href="https://nday.mg/nday_bentanana" target="_blank" class="external-link">Visit Live Platform</a>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add("active"), 0);
    toggleBackground(true);
}

// Tab switching function for NdaY'Ben'Tanàna modal
function switchNdayTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.modal-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById(`nday-tab-${tabName}`).classList.add('active');
}

// Demo user type selection
function showDemoUser(userType) {
    const demoContent = document.getElementById('demo-content');
    const mockData = ndayBenTananaMockData;
    
    if (userType === 'citizen') {
        const citizen = mockData.taxpayers[0]; // Use first citizen with multiple properties
        demoContent.innerHTML = `
            <div class="demo-citizen">
                <h4>Citizen Portal - ${citizen.name}</h4>
                <div class="citizen-properties">
                    <h5>Your Properties & Tax Status:</h5>
                    ${citizen.properties.map(property => `
                        <div class="property-card ${property.status}">
                            <div class="property-info">
                                <strong>${property.address}</strong>
                                <span class="property-id">${property.id}</span>
                            </div>
                            <div class="property-tax">
                                <span class="tax-amount">${property.taxAmount.toLocaleString()} Ar</span>
                                <span class="tax-status ${property.status}">${property.status.toUpperCase()}</span>
                            </div>
                            ${property.status === 'unpaid' ? 
                                `<button class="pay-btn" onclick="simulatePayment('${property.id}')">Pay Now</button>` : 
                                '<span class="paid-check">✓ Paid</span>'
                            }
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (userType === 'mayor') {
        demoContent.innerHTML = `
            <div class="demo-mayor">
                <h4>Mayor Dashboard - ${mockData.municipality.mayor}</h4>
                <div class="mayor-overview">
                    <div class="overview-stats">
                        <div class="overview-stat">
                            <h5>Properties</h5>
                            <span>${mockData.municipality.totalProperties}</span>
                        </div>
                        <div class="overview-stat">
                            <h5>Taxpayers</h5>
                            <span>${mockData.municipality.totalTaxpayers}</span>
                        </div>
                        <div class="overview-stat">
                            <h5>Collection Rate</h5>
                            <span>${mockData.municipality.collectionRate}</span>
                        </div>
                    </div>
                    <div class="property-list">
                        <h5>All Properties:</h5>
                        ${mockData.taxpayers.flatMap(taxpayer => 
                            taxpayer.properties.map(property => `
                                <div class="property-row ${property.status}">
                                    <span class="prop-id">${property.id}</span>
                                    <span class="prop-address">${property.address}</span>
                                    <span class="prop-owner">${taxpayer.name}</span>
                                    <span class="prop-amount">${property.taxAmount.toLocaleString()} Ar</span>
                                    <span class="prop-status ${property.status}">${property.status}</span>
                                </div>
                            `)
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

// Simulate payment for demo
function simulatePayment(propertyId) {
    const button = event.target;
    button.textContent = 'Processing...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = '✓ Paid';
        button.classList.add('paid');
        const propertyCard = button.closest('.property-card');
        propertyCard.classList.remove('unpaid');
        propertyCard.classList.add('paid');
        const statusSpan = propertyCard.querySelector('.tax-status');
        statusSpan.textContent = 'PAID';
        statusSpan.classList.remove('unpaid');
        statusSpan.classList.add('paid');
    }, 2000);
}

// Ensure the closeOverlay function is available globally
function closeOverlay() {
    const overlay = document.querySelector(".content-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        setTimeout(() => overlay.remove(), 500); // Match CSS transition
    }
    // Also call toggleBackground to restore the background
    if (typeof toggleBackground === 'function') {
        toggleBackground(false);
    } else {
        // Fallback if toggleBackground is not available globally
        document.body.classList.remove("hide-background");
    }
}

// Make functions globally available
window.switchNdayTab = switchNdayTab;
window.showDemoUser = showDemoUser;
window.simulatePayment = simulatePayment;
window.closeOverlay = closeOverlay;

// Sticky Header
function addStickyHeaderBehavior() {
    const header = document.querySelector("header.sticky-header");
    if (!header) {
        console.error("Header not found!");
        return;
    }

    document.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
}