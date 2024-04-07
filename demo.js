const driver = window.driver.js.driver;

const driverObj = driver({
  animate: false,
  showProgress: false,
  showButtons: ['next', 'previous', 'close'],
  steps: [
    { element: '.m',
      popover: { 
                title: 'Welcome',
                description: `    `,
                side: "left",
                align: 'start',
                }
    },
    { element: '.offer',
      popover: { 
                title: 'Offer',
                description: ` Current biggest offer   `,
                side: "left",
                align: 'start',
                }
    },
    { element: '.header-img >img', popover: { title: 'LI - NING', description: 'Brand logo', side: "bottom", align: 'start' }},
    { element: '.options', popover: { title: 'Product range', description: '', side: "bottom", align: 'start' }},
    { element: '.search', popover: { title: 'Search across the product range', description: '', side: "bottom", align: 'start' }},
    { element: '.cart', popover: { title: 'Cart', description: '', side: "bottom", align: 'start' }},
    { element: '.user', popover: { title: 'User profile', description: '', side: "bottom", align: 'start' }},
    { element: '.p2m1', popover: { title: 'Newly Launched', description: '', side: "bottom", align: 'start' }},
    { element: '.p2m2', popover: { title: 'ULTRA FLY III range', description: '', side: "bottom", align: 'start' }},
    { element: '.p2m6', popover: { title: 'Wind Lite 800 series', description: '', side: "bottom", align: 'start' }},
    { element: '.p2m7', popover: { title: 'Air Force G3 series', description: '', side: "bottom", align: 'start' }},
    { element: '.forhelp > h1', popover: { title: 'For any more QUERIES talk to my ASSISTANT', description: '', side: "bottom", align: 'start' }},
    
    
  ]
});

driverObj.drive();