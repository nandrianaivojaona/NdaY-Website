/**
 * NdaY'Ben'Tanàna Mock Data
 * Comprehensive mock data for the municipal governance platform
 * Based on the Mock_NdaY_Ben_Tanana project
 */

const ndayBenTananaMockData = {
    // Municipal Information
    municipality: {
        name: "Commune d'Antananarivo",
        mayor: "Ingahy Solo Lehibe",
        totalProperties: 7,
        totalTaxpayers: 5,
        paidProperties: 3,
        collectionRate: "42.86%",
        services: [
            "Land Tax Payment",
            "Birth Certificate Issuance", 
            "Business License",
            "Property Registration",
            "WASH Services"
        ]
    },

    // Municipal Bank Accounts
    municipalBankAccounts: {
        general_tax_account: "MA0010000012345678901234",
        special_projects_account: "MA0010000098765432109876"
    },

    // Bank Receipt Validation Rules
    bankReceiptValidationRules: {
        amountTolerance: 500,
        allowedBankAccounts: [
            "MA0010000012345678901234",
            "MA0010000098765432109876"
        ]
    },

    // Mock Users
    users: [
        { id: 'admin', name: 'Mayor Solo Lehibe', password: 'admin123', role: 'mayor' },
        { id: 'citizen1', name: 'Rakoto Lekely', password: 'pass123', role: 'citizen', phone: '1234567891' },
        { id: 'citizen2', name: 'Ravao Bodo', password: 'pass123', role: 'citizen', phone: '1234567892' },
        { id: 'citizen3', name: 'Alice Brown', password: 'pass123', role: 'citizen', phone: '1234567893' },
        { id: 'citizen4', name: 'Bob Johnson', password: 'pass123', role: 'citizen', phone: '1234567894' },
        { id: 'citizen5', name: 'Emma Wilson', password: 'pass123', role: 'citizen', phone: '1234567895' }
    ],

    // Taxpayer Records (5 taxpayers, 7 properties total)
    taxpayers: [
        {
            id: 'TAX001',
            name: 'Rakoto Lekely',
            userId: 'citizen1',
            phone: '1234567891',
            properties: [
                { id: 'PROP001', address: 'Lot 123, Analakely', taxAmount: 50000, status: 'unpaid', year: 2024 },
                { id: 'PROP002', address: 'Lot 456, Andavamamba', taxAmount: 75000, status: 'paid', year: 2024 },
                { id: 'PROP003', address: 'Lot 789, Isotry', taxAmount: 60000, status: 'unpaid', year: 2024 }
            ]
        },
        {
            id: 'TAX002',
            name: 'Ravao Bodo',
            userId: 'citizen2', 
            phone: '1234567892',
            properties: [
                { id: 'PROP004', address: 'Lot 321, Ankatso', taxAmount: 80000, status: 'paid', year: 2024 }
            ]
        },
        {
            id: 'TAX003',
            name: 'Alice Brown',
            userId: 'citizen3',
            phone: '1234567893', 
            properties: [
                { id: 'PROP005', address: 'Lot 654, Ankadifotsy', taxAmount: 45000, status: 'unpaid', year: 2024 }
            ]
        },
        {
            id: 'TAX004',
            name: 'Bob Johnson',
            userId: 'citizen4',
            phone: '1234567894',
            properties: [
                { id: 'PROP006', address: 'Lot 987, Besarety', taxAmount: 55000, status: 'unpaid', year: 2024 }
            ]
        },
        {
            id: 'TAX005',
            name: 'Emma Wilson',
            userId: 'citizen5',
            phone: '1234567895',
            properties: [
                { id: 'PROP007', address: 'Lot 111, Manjakaray', taxAmount: 70000, status: 'paid', year: 2024 }
            ]
        }
    ],

    // Payment History/Transactions
    transactions: [
        {
            id: 'TXN001',
            propertyId: 'PROP002',
            taxpayerId: 'TAX001',
            amount: 75000,
            method: 'Orange Money',
            date: '2024-01-15',
            status: 'completed',
            reference: 'OM123456789'
        },
        {
            id: 'TXN002', 
            propertyId: 'PROP004',
            taxpayerId: 'TAX002',
            amount: 80000,
            method: 'Mvola',
            date: '2024-02-20',
            status: 'completed',
            reference: 'MV987654321'
        },
        {
            id: 'TXN003',
            propertyId: 'PROP007',
            taxpayerId: 'TAX005',
            amount: 70000,
            method: 'Bank Transfer',
            date: '2024-03-10',
            status: 'completed',
            reference: 'BT555666777'
        }
    ],

    // Taxation Categories
    taxation: {
        land: [
            { year: 2024, status: 'In Progress', amount: '385,000 Ar', blockchainVerified: true },
            { year: 2023, status: 'Completed', amount: '350,000 Ar', blockchainVerified: true },
            { year: 2022, status: 'Completed', amount: '320,000 Ar', blockchainVerified: true }
        ],
        transport: [
            { year: 2024, status: 'Pending', amount: '150,000 Ar', blockchainVerified: false },
            { year: 2023, status: 'Completed', amount: '140,000 Ar', blockchainVerified: true }
        ],
        sell: [
            { year: 2024, status: 'In Progress', amount: '200,000 Ar', blockchainVerified: true },
            { year: 2023, status: 'Completed', amount: '180,000 Ar', blockchainVerified: true }
        ],
        services: [
            { year: 2024, status: 'Active', amount: '75,000 Ar', blockchainVerified: true },
            { year: 2023, status: 'Completed', amount: '70,000 Ar', blockchainVerified: true }
        ]
    },

    // User-specific Tax Records (for logged-in users)
    userTaxRecords: {
        'citizen1': [
            { id: 'TAX001-PROP001', plotNumber: 'PROP001', year: '2024', amount: '50,000 Ar', paid: false },
            { id: 'TAX001-PROP002', plotNumber: 'PROP002', year: '2024', amount: '75,000 Ar', paid: true },
            { id: 'TAX001-PROP003', plotNumber: 'PROP003', year: '2024', amount: '60,000 Ar', paid: false }
        ],
        'citizen2': [
            { id: 'TAX002-PROP004', plotNumber: 'PROP004', year: '2024', amount: '80,000 Ar', paid: true }
        ],
        'citizen3': [
            { id: 'TAX003-PROP005', plotNumber: 'PROP005', year: '2024', amount: '45,000 Ar', paid: false }
        ],
        'citizen4': [
            { id: 'TAX004-PROP006', plotNumber: 'PROP006', year: '2024', amount: '55,000 Ar', paid: false }
        ],
        'citizen5': [
            { id: 'TAX005-PROP007', plotNumber: 'PROP007', year: '2024', amount: '70,000 Ar', paid: true }
        ]
    },

    // Service Categories
    services: {
        certificates: {
            name: "Birth Certificates",
            description: "Digital issuance of birth certificates with blockchain verification",
            features: ["Online Application", "Digital Signature", "Blockchain Verified", "Home Delivery"],
            processingTime: "2-3 business days",
            cost: "2,500 Ar"
        },
        legalization: {
            name: "Document Legalization", 
            description: "Official document authentication and legalization services",
            features: ["Document Verification", "Digital Stamps", "Legal Authentication"],
            processingTime: "1-2 business days",
            cost: "5,000 Ar"
        },
        business: {
            name: "Business Licenses",
            description: "Business registration and licensing services",
            features: ["Online Registration", "Digital Permits", "Tax Registration"],
            processingTime: "5-7 business days",
            cost: "15,000 Ar"
        },
        property: {
            name: "Property Services",
            description: "Property registration and land title services",
            features: ["Title Registration", "Property Mapping", "Ownership Transfer"],
            processingTime: "10-15 business days", 
            cost: "25,000 Ar"
        }
    },

    // Recent Activities/News
    recentActivities: [
        {
            date: "2024-07-08",
            type: "payment",
            description: "3 new tax payments processed via Orange Money",
            amount: "225,000 Ar"
        },
        {
            date: "2024-07-07", 
            type: "service",
            description: "12 birth certificates issued digitally",
            amount: "30,000 Ar"
        },
        {
            date: "2024-07-06",
            type: "registration",
            description: "2 new businesses registered online",
            amount: "30,000 Ar"
        }
    ],

    // Platform Statistics
    statistics: {
        totalUsers: 156,
        totalTransactions: 89,
        totalRevenue: "2,850,000 Ar",
        digitalAdoptionRate: "67%",
        averageProcessingTime: "2.3 days",
        userSatisfactionRate: "94%"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ndayBenTananaMockData;
}