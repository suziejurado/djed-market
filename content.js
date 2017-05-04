module.exports = {
  "pages": {
    "main": {
      "story": "lifestyle",
      "stories": [ "lifestyle", "event-soccer", "asset-home", "list-trip", "contact-elderly", "list-newborn" ],
      "template": "src/html/pages/index.html",
      "useAppCache": true
    },
    "event-soccer": {
      "story": "event-soccer",
      "stories": [ "event-soccer" ],
      "template": "src/html/pages/entry/event-soccer.html"
    },
    "asset-home": {
      "story": "asset-home",
      "stories": [ "asset-home" ],
      "template": "src/html/pages/entry/asset-home.html"
    },
    "list-trip": {
      "story": "list-trip",
      "stories": [ "list-trip" ],
      "template": "src/html/pages/entry/list-trip.html"
    },
    "contact-elderly": {
      "story": "contact-elderly",
      "stories": [ "contact-elderly" ],
      "template": "src/html/pages/entry/contact-elderly.html"
    },
    "list-newborn": {
      "story": "list-newborn",
      "stories": [ "list-newborn" ],
      "template": "src/html/pages/entry/list-newborn.html"
    }
  },

  "stories": {

    "lifestyle": {
      "images-to-cache": [ "/img/background.jpg" ],
      "headline": "Lifestyle",
      "icon": '<svg id="lifestyle" width="22" height="22" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path d="M36.6,32.4c-0.8-0.5-1.9-0.3-2.4,0.5c-2,3.1-5.5,5-9.2,5c-3.7,0-7.1-1.9-9.2-5c-0.5-0.8-1.6-1-2.4-0.5 c-0.8,0.5-1,1.6-0.5,2.4c2.7,4.1,7.2,6.5,12.1,6.5c4.9,0,9.4-2.4,12.1-6.5C37.6,34,37.4,32.9,36.6,32.4z"/><path d="M25,0C11.2,0,0,11.2,0,25c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25C50,11.2,38.8,0,25,0z M44.6,19.9 c-2-0.7-5-2.4-8.7-6.2C32.2,10,30,7.1,28.7,5.1C36.4,6.5,42.6,12.3,44.6,19.9z M21.4,5.1c-1.6,2.1-4.1,5.2-7.8,8.9 c-3.6,3.6-6.3,5.1-8.1,5.8C7.4,12.3,13.6,6.5,21.4,5.1z M25,45.3C13.8,45.3,4.7,36.2,4.7,25c0-0.5,0-1,0.1-1.5 c2.4-0.5,6.2-2.1,11.2-7.1c4.6-4.6,7.5-8.3,9.1-10.6c1.4,2.3,3.9,5.8,8.4,10.3c5.2,5.2,9.3,7,11.8,7.5c0,0.4,0.1,0.9,0.1,1.3 C45.3,36.2,36.2,45.3,25,45.3z"/><circle cx="12.2" cy="26.3" r="2.3"/><circle cx="37.8" cy="26.3" r="2.3"/></svg>',
      "slider": {
        "headline": "The Family App",
        "subhead": "Family is the most important thing to you.  Now there's an app for that.",
        "hero-product-key": "",
        "hero-product-imagepath": "/img/card-family.png",
        "hero-lifestyle-key": "",
        "underline": "djed-teal"
      },
      "product-shot": {
        "headline": "An app for all the family's private content.",
        "subhead": "Capture the real content about family life we need today and 10 years from now.",
        "phone-imagepath": "/img/product-iphone.png",
        "browser-imagepath": "/img/product-browser.jpg"
      },
      "privacy-example": {
        "headline": "Share with your family.",
        "body": "Want a way to share SOME of your content with your brothers, sisters, grandparents, caregivers? We have a great way to invite other families and connect only to them, a private channel for sharing the highlights.",
        "family-members-headline": "Family Members",
        "family-members": [ {
          "name": "Mom",
          "imagepath": "/img/avatar-family-anna.png"
        }, {
          "name": "Dad",
          "imagepath": "/img/avatar-family-ramon.png"
        }, {
          "name": "David",
          "imagepath": "/img/avatar-family-david.png"
        }, {
          "name": "Isabel",
          "imagepath": "/img/avatar-family-isabel.png"
        }, {
          "name": "Nicolas",
          "imagepath": "/img/avatar-family-nicolas.png"
        } ],
        "closest-family-headline": "Closest Families",
        "closest-family": [ {
          "name": "Johnson Family"
        }, {
          "name": "Thompson Family"
        } ],
        "caregivers": [ {
          "name": "Ms. Tammy"
        } ],
        "card-imagepath": "/img/card-privacy.png"
      }
    },

    "event-soccer": {
      "images-to-cache": [ "/img/background-grass.jpg" ],
      "headline": "Event Soccer",
      "icon": '<svg id="soccer" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path d="M25,0C11.2,0,0,11.2,0,25c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25C50,11.2,38.8,0,25,0z M43.5,16.7 l-2,0.1c-1.3-2.2-2.6-3.7-3.6-4.5c0,0,0-0.1,0-0.1c0-0.3-0.2-1.6-0.6-3.3C39.9,10.9,42.1,13.6,43.5,16.7z M35.2,41.1 c-3.8,0.2-7.5-1.1-9.1-1.8c0-1.7-0.1-4.3-0.3-6l7-7.7c1.5,0.3,3.5,0.6,5,0.7c0.8,2.1,2.3,6.6,2.5,10.1 C38.8,38.3,36.8,39.9,35.2,41.1z M11.4,35.4c-1.6-0.2-3.6-0.8-4.6-1.6c-1.3-2.7-2-5.6-2-8.8c0-2.4,0.4-4.6,1.2-6.7 c1.3,0.4,2.7,0.9,3.9,1.3c0.5,2.8,1.5,7.8,3.1,11.2C12.3,32.2,11.7,34.1,11.4,35.4z M16,29.5c-1-2.4-2.2-6.5-2.9-10.9 c1.2-1.1,2.8-2.7,4.1-3.9c2.1,0.1,6.9,0.6,11.5,2.7c0.3,1.7,1,4.2,1.6,5.9l-7.5,8.2C20.2,31.3,17.7,30.3,16,29.5z M32.9,6.3 c0.6,1.5,1.1,3.8,1.4,5.5c-1.3,0.6-2.9,1.6-4.2,2.4c-4.5-2-9-2.7-11.7-2.9l-1.7-4.8C19.2,5.4,22,4.7,25,4.7 C27.8,4.7,30.5,5.3,32.9,6.3z M10.1,38.7c1,0.2,1.8,0.3,2.3,0.3c1.1,0.9,2.6,1.7,3.7,2.3l-0.2,1.9C13.7,42,11.8,40.5,10.1,38.7z M19.3,44.5l0.2-2.2c1.5,0.1,3-0.1,4.2-0.3c0,0,0,0,0,0c0.2,0.1,3.4,1.7,7.5,2.3c-2,0.6-4.1,1-6.2,1C23,45.3,21.1,45,19.3,44.5z M43.4,33.4c-0.8-4.4-2.5-8.5-2.6-8.8c0,0,0,0,0,0c0.5-1.3,0.9-3.1,1.2-4.4l2.6-0.2c0.4,1.6,0.6,3.2,0.6,5 C45.3,28,44.6,30.8,43.4,33.4z"/></svg>',
      "slider": {
        "headline": "Keep Score, Families",
        "subhead": "For getting there on time. For storing the game-winning video. For sharing with grandparents. Go team.",
        "hero-product-key": "background-grass",
        "hero-product-imagepath": "/img/card-soccer.png",
        "hero-lifestyle-key": "soccer",
        "underline": "yellow"
      },
      "product-shot": {
        "headline": "An app for families who love to compete.",
        "subhead": "For families who want a way to keep score: events, lists, photos, stories, team members, and everything else for the winning season. Go private. Go team.",
        "phone-imagepath": "/img/product-iphone-soccer.png",
        "browser-imagepath": "/img/product-browser-soccer.jpg"
      },
      "privacy-example": {
        "headline": "For the private post-game wrap up.",
        "body": "For sharing the details with a select few, for grandparents waiting at home to hear who won, for Aunt Gayle her one-time coach, for the sporty cousins who know the game. For family.",
        "family-members-headline": "Family Members",
        "family-members": [ {
          "name": "Mom",
          "imagepath": "/img/avatar-soccer-mom.png"
        }, {
          "name": "Dad",
          "imagepath": "/img/avatar-soccer-dad.png"
        }, {
          "name": "Maddie",
          "imagepath": "/img/avatar-soccer-maddie.png"
        }, {
          "name": "Baby Olivia",
          "imagepath": "/img/avatar-soccer-olivia.png"
        }, {
          "name": "Buster",
          "imagepath": "/img/avatar-soccer-buster.png"
        } ],
        "closest-family-headline": "Closest Families",
        "closest-family": [ {
          "name": "Grandma & Grandpa Johnson"
        }, {
          "name": "Aunt Gayle"
        }, {
          "name": "Johnson Family Cousins"
        } ],
        "card-imagepath": "/img/card-privacy-soccer.png"
      }
    },


    "asset-home": {
      "images-to-cache": [ "/img/background-pavement.jpg" ],
      "headline": "Asset Home",
      "icon": '<svg id="home" width="22" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><path d="M45.5,21.5c0-0.6-0.2-1.2-0.6-1.6L26.6,0.7c-0.9-0.9-2.5-0.9-3.4,0l-5.5,5.8V6.4c0-1-0.8-1.7-1.7-1.7H9.7 C8.7,4.7,8,5.5,8,6.4v10.3l-3.1,3.2c-0.4,0.4-0.6,1-0.6,1.6v26.1c0,1.3,1.1,2.4,2.4,2.4h36.5c1.3,0,2.4-1.1,2.4-2.4L45.5,21.5z M24.8,5.8l12.7,13.4H12.1L24.8,5.8z M11.4,8.1h2.7v2L11.4,13V8.1z M28.7,45.3h-7.5V32.9h7.5V45.3z M40.7,45.3h-8.6V31.1 c0-1-0.8-1.7-1.7-1.7h-11c-1,0-1.7,0.8-1.7,1.7v14.1H8.9V23.9h31.7C40.7,23.9,40.7,45.3,40.7,45.3z"/><circle cx="27.1" cy="39.5" r="1"/><rect x="10.4" y="32.8" width="5.5" height="3.5"/><rect x="33.8" y="32.8" width="5.5" height="3.5"/></svg>',
      "slider": {
        "headline": "Keep it Handy",
        "subhead": "For keeping track of all your things, like the house, car, insurance, and even the list of things you need at the hardware store.",
        "hero-product-key": "background-pavement",
        "hero-product-imagepath": "/img/card-assets.png",
        "hero-lifestyle-key": "home",
        "underline": "green"
      },
      "product-shot": {
        "headline": "An app for families who love to save time and keep it together.",
        "subhead": "For families who want a simple and secure way to keep track of assets, related events and contacts and lists and everything else we wish we had in one place on all our devices.",
        "phone-imagepath": "/img/product-iphone-assets.png",
        "browser-imagepath": "/img/product-browser-assets.jpg"
      },
      "privacy-example": {
        "headline": "For private information about the thing we love.",
        "body": "For sharing the details about what's going on with the house and the Internet and the guy who mows the yard and the password for Netflix.",
        "family-members-headline": "Family Members",
        "family-members": [ {
          "name": "Vanessa",
          "imagepath": "/img/avatar-assets-maya.png"
        }, {
          "name": "Matthew",
          "imagepath": "/img/avatar-assets-raj.png"
        }, {
          "name": "Baby Niam",
          "imagepath": "/img/avatar-assets-niam.png"
        } ],
        "closest-family-headline": "Closest Families",
        "closest-family": [ {
          "name": "Sharma Family"
        }, {
          "name": "Patel Family"
        } ],
        "caregivers": [ {
          "name": "Ms. Diana"
        } ],
        "card-imagepath": "/img/card-privacy-assets.png"
      }
    },

    "list-trip": {
      "images-to-cache": [ "/img/background-holiday.jpg" ],
      "headline": "List Trip",
      "icon": '<svg id="trip" width="58" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="-40.4 0 130.8 50" enable-background="new -40.4 0 130.8 50" xml:space="preserve"><circle cx="-6.5" cy="39.2" r="2.1"/><path d="M88,28.7l-42.7,4c0.2-1,0.3-2,0.3-3.1l16.1-1.5c0.7-0.1,1.2-0.7,1.1-1.4c-0.1-0.7-0.7-1.2-1.4-1.1 l-15.9,1.5c-0.9-9.6-8.3-17.4-17.8-18.8V2.5c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5v5.6C12.7,9.1,4.7,17,3.8,27l-15.2-1.4 c-0.7-0.1-1.3,0.4-1.4,1.1c-0.1,0.7,0.4,1.3,1.1,1.4l15.4,1.4c0,1.1,0.1,2.1,0.3,3.1l-42-3.9c-1.2-0.1-2.3,0.8-2.4,2 c-0.1,1.2,0.8,2.3,2,2.4l13.1,1.2c-0.3,0.6-0.4,1.2-0.4,1.9c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-0.4-0.1-0.7-0.1-1.1 l4.4,0.4c-0.6,1.1-1,2.3-1,3.6c0,3.9,3.2,7,7,7s7-3.2,7-7c0-0.9-0.2-1.7-0.5-2.5l5.3,0.5C8.5,44.7,16,50,24.7,50 c8.7,0,16.1-5.3,19.3-12.8c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0l5.8-0.5c-0.3,0.8-0.5,1.6-0.5,2.5c0,3.9,3.2,7,7,7s7-3.2,7-7 c0-1.3-0.4-2.6-1-3.6l4.4-0.4c-0.1,0.3-0.1,0.7-0.1,1.1c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-0.7-0.2-1.3-0.4-1.9l13.1-1.2 c1.2-0.1,2.1-1.2,2-2.4C90.3,29.5,89.2,28.6,88,28.7z M-19.3,36.2c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9 c0-0.7,0.3-1.2,0.8-1.6l2.5,0.2C-19.5,35.2-19.3,35.7-19.3,36.2z M-2,39.2c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5 c0-1.3,0.6-2.5,1.5-3.4l6.5,0.6C-2.4,37.2-2,38.1-2,39.2z M24.7,12.4c8.6,0,15.6,6.5,16.5,14.9h-3c-0.6-6.9-6.5-12.4-13.5-12.4 c-7.1,0-12.9,5.5-13.5,12.4h-3C9,19,16.1,12.4,24.7,12.4z M23.6,33.8C23.6,33.7,23.6,33.7,23.6,33.8c-0.6-0.4-0.9-1-0.9-1.6 c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9C24.3,34.1,23.9,33.9,23.6,33.8z M13.6,27.3c0.6-5.5,5.3-9.9,11-9.9 c5.7,0,10.4,4.3,11,9.9H13.6z M8.1,29.8h12.8c-0.4,0.7-0.7,1.5-0.7,2.3c0,1,0.3,1.9,0.9,2.6l-7,7C10.6,38.9,8.4,34.6,8.1,29.8z M16.2,43.2l7-7c0.5,0.2,1,0.3,1.5,0.3c0.6,0,1.1-0.1,1.6-0.3l6.9,6.9c-2.5,1.5-5.4,2.4-8.5,2.4C21.5,45.6,18.7,44.7,16.2,43.2z M35.3,41.7l-7-7c0.5-0.7,0.8-1.6,0.8-2.6c0-0.9-0.3-1.6-0.7-2.3h12.8C41,34.6,38.7,38.9,35.3,41.7z M61.1,39.2 c0,2.5-2,4.5-4.5,4.5c-2.5,0-4.5-2-4.5-4.5c0-1,0.4-2,1-2.8l6.5-0.6C60.5,36.6,61.1,37.8,61.1,39.2z M73.2,36.2 c0,1.1-0.9,1.9-1.9,1.9s-1.9-0.9-1.9-1.9c0-0.5,0.2-1,0.5-1.3l2.5-0.2C72.9,35,73.2,35.5,73.2,36.2z"/><circle cx="56.5" cy="39.2" r="2.1"/></svg>',
      "slider": {
        "headline": "Play Together, Stay Together",
        "subhead": "For packing, unpacking, relaxing, and remembering all the fun you had.",
        "hero-product-key": "background-holiday",
        "hero-product-imagepath": "/img/card-trip.png",
        "hero-lifestyle-key": "trip",
        "underline": "yellow-green"
      },
      "product-shot": {
        "headline": "An app for families who love travel and hate to stress.",
        "subhead": "For families who want a great way to plan and pack and share all the joy we have on family holidays together.",
        "phone-imagepath": "/img/product-iphone-trip.png",
        "browser-imagepath": "/img/product-browser-trip.jpg"
      },
      "privacy-example": {
        "headline": "For private information about our trips and our loved ones.",
        "body": "For planning when we're leaving, what we're doing, and having a way to keep the details in a safe place, just for family.",
        "family-members-headline": "Family Members",
        "family-members": [ {
          "name": "Andre",
          "imagepath": "/img/avatar-trip-andre.png"
        }, {
          "name": "Corin",
          "imagepath": "/img/avatar-trip-corin.png"
        }, {
          "name": "Chandler",
          "imagepath": "/img/avatar-trip-chandler.png"
        } ],
        "closest-family-headline": "Closest Families",
        "closest-family": [ {
          "name": "Nadar Family"
        }, {
          "name": "Lipinski Family"
        } ],
        "card-imagepath": "/img/card-privacy-trip.png"
      }
    },

    "contact-elderly": {
      "images-to-cache": [ "/img/background-flowers.jpg" ],
      "headline": "Contact Elderly",
      "icon": '<svg id="elderly" width="21" height="24" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50"><path d="M44.8,5.8h-6.1V2.4c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4v3.4h-6.6V2.4C27.4,1.1,26.3,0,25,0 s-2.4,1.1-2.4,2.4v3.4h-6.6V2.4C16.1,1.1,15,0,13.7,0s-2.4,1.1-2.4,2.4v3.4H5.2c-1.3,0-2.4,1.1-2.4,2.4v39.5c0,1.3,1.1,2.4,2.4,2.4 h39.5c1.3,0,2.4-1.1,2.4-2.4V8.1C47.1,6.8,46.1,5.8,44.8,5.8z M42.4,45.3H7.6V10.5h3.7v0.9c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4 v-0.9h6.6v0.9c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4v-0.9h6.6v0.9c0,1.3,1.1,2.4,2.4,2.4c1.3,0,2.4-1.1,2.4-2.4v-0.9h3.8V45.3z"/><path d="M37,17.8H13c-1,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7h24c1,0,1.7-0.8,1.7-1.7S38,17.8,37,17.8z"/><path d="M37,26.5H13c-1,0-1.7,0.8-1.7,1.7S12,30,13,30h24c1,0,1.7-0.8,1.7-1.7S38,26.5,37,26.5z"/><path d="M37,35.3H13c-1,0-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7h24c1,0,1.7-0.8,1.7-1.7S38,35.3,37,35.3z"/></svg>',
      "slider": {
        "headline": "Stay Connected, Always",
        "subhead": "For being closer, and keeping track of health and wealth and what the doctor said yesterday.",
        "hero-product-key": "background-flowers",
        "hero-product-imagepath": "/img/card-contact.png",
        "hero-lifestyle-key": "elderly",
        "underline": "light-teal"
      },
      "product-shot": {
        "headline": "An app for families who like to be close.",
        "subhead": "A better way to keep track of appointments, contacts, notes, share stories, and even see photos of the grandkids.",
        "phone-imagepath": "/img/product-iphone-elderly.png",
        "browser-imagepath": "/img/product-browser-elderly.jpg"
      },
      "privacy-example": {
        "headline": "For private information about our lives and what really matters.",
        "body": "A better way to keep track of what's going on and share the details with just your kids and caregivers.  Track events, add reminders, write those stories you've kept to yourself all these years, and protect your privacy.",
        "closest-family-headline": "Kids & Grandkids",
        "closest-family": [ {
          "name": "Johnson Family"
        }, {
          "name": "Thompson Family"
        } ],
        "caregivers": [ {
          "name": "Ms. Tammy"
        } ],
        "card-imagepath": "/img/card-privacy-elderly.png"
      }
    },

    "list-newborn": {
      "images-to-cache": [ "/img/background-blanket.jpg" ],
      "headline": "List Newborn",
      "icon": '<svg id="newborn" width="25" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 44.2" enable-background="new 0 0 50 44.2" xml:space="preserve"><path d="M25,44.2c-1.6,0-3.5-0.7-5.8-2.2C10.3,36.5,4.3,30.3,1.4,23.4C0.5,21.3,0,18.8,0,16.2 c0-4.1,1.5-7.9,4.4-11.1C7.5,1.7,11.3,0,15.7,0c1.8,0,3.7,0.4,5.6,1.2c1.5,0.6,2.8,1.5,3.9,2.5C27.9,1.2,31,0,34.3,0 c4.5,0,8.3,1.7,11.4,5.2c2.9,3.2,4.4,6.9,4.4,11.1c0,4.2-1.4,8.4-4.3,12.5c-2.6,3.7-6.3,7.3-11,10.7c-2.9,2.1-3.8,2.7-4.3,2.9 C28.4,43.6,26.6,44.2,25,44.2z M15.7,4.7c-3.1,0-5.6,1.2-7.8,3.6c-2.1,2.3-3.2,4.9-3.2,7.9c0,2,0.3,3.8,1,5.3 C8.3,27.5,13.6,33,21.7,38c2.2,1.4,3.1,1.5,3.3,1.5c0.4,0,1.3-0.2,3-1.2c0.4-0.2,1.4-0.9,3.9-2.7c4.3-3.1,7.6-6.3,9.9-9.6 c2.3-3.3,3.5-6.6,3.5-9.8c0-3-1-5.6-3.1-7.9c-2.2-2.4-4.7-3.6-7.9-3.6c-2.6,0-5.1,1.3-7.6,4c-0.5,0.5-1.2,0.8-1.9,0.8  c-0.7,0-1.4-0.4-1.8-1c-0.9-1.3-2.1-2.2-3.7-2.9C18.1,5,16.8,4.7,15.7,4.7z"/><path d="M39.2,21.1c-0.1,0-0.2,0-0.3,0c-0.9-0.2-1.5-1.1-1.4-2c1-4.8-3.5-6.2-4-6.4c-0.9-0.3-1.4-1.2-1.2-2.1 c0.3-0.9,1.2-1.4,2.1-1.2c2.8,0.8,7.8,4,6.5,10.4C40.7,20.6,40,21.1,39.2,21.1z"/></svg>',
      "slider": {
        "headline": "Grow Your Family",
        "subhead": "For managing it all and sharing the load with your family.",
        "hero-product-key": "background-blanket",
        "hero-product-imagepath": "/img/card-newborn.png",
        "hero-lifestyle-key": "newborn",
        "underline": "red"
      },
      "product-shot": {
        "headline": "An app for families with a lot of moving parts.",
        "subhead": "A better way to keep track of health, and budgets, and birth certificates, and even the list of names you didn't choose.",
        "phone-imagepath": "/img/product-iphone-newborn.png",
        "browser-imagepath": "/img/product-browser-newborn.jpg"
      },
      "privacy-example": {
        "headline": "For private information about our lives and what really matters.",
        "body": "A better way to make plans, share lists, keep track of health and budgets and where to put year-end grades from pre-school.",
        "family-members-headline": "Family Members",
        "family-members": [ {
          "name": "Mom",
          "imagepath": "/img/avatar-newborn-mom.png"
        }, {
          "name": "Dad",
          "imagepath": "/img/avatar-newborn-dad.png"
        }, {
          "name": "Max",
          "imagepath": "/img/avatar-newborn-max.png"
        } ],
        "closest-family-headline": "Closest Families",
        "closest-family": [ {
          "name": "Johnson Family"
        }, {
          "name": "Thompson Family"
        } ],
        "caregivers": [ {
          "name": "Ms. Tammy"
        } ],
        "card-imagepath": "/img/card-privacy-newborn.png"
      }
    }

  }

};
