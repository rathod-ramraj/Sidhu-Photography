import { IProject } from '@/types';

export const GENERAL_INFO = {
    name: 'Sidhu Photography',
    email: 'Ajmeranaresh391@gmail.com',
    emailSubject: 'Book a Photography Session / Inquiry',
    emailBody: 'Hi Sidhu, I would like to inquire about booking a photography session for...',
    oldPortfolio: 'https://www.instagram.com',
    upworkProfile: 'mailto:Ajmeranaresh391@gmail.com',
};

export const SOCIAL_LINKS = [
    { name: 'Instagram', url: 'https://www.instagram.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Pinterest', url: 'https://www.pinterest.com' },
    { name: 'Email', url: `mailto:${GENERAL_INFO.email}` },
];

export const MY_SERVICES = {
    weddings: [
        {
            name: 'Wedding Photography',
            icon: '/photography-services/wedding.svg',
        },
        {
            name: 'Pre-Wedding Shoots',
            icon: '/photography-services/pre-wedding.svg',
        },
        {
            name: 'Candid Moments',
            icon: '/photography-services/candid.svg',
        },
    ],
    portraits: [
        {
            name: 'Editorial Portraits',
            icon: '/photography-services/portrait.svg',
        },
        {
            name: 'Fashion & Couture',
            icon: '/photography-services/fashion.svg',
        },
        {
            name: 'Lifestyle & Personal',
            icon: '/photography-services/lifestyle.svg',
        },
    ],
    events: [
        {
            name: 'Cultural & Festive Events',
            icon: '/photography-services/events.svg',
        },
        {
            name: 'Aerial & Drone Visuals',
            icon: '/photography-services/drone.svg',
        },
        {
            name: 'Cinematic Films',
            icon: '/photography-services/cinematography.svg',
        },
    ],
    production: [
        {
            name: 'Color Grading & Retouching',
            icon: '/photography-services/editing.svg',
        },
        {
            name: 'Studio Lighting',
            icon: '/photography-services/lighting.svg',
        },
        {
            name: 'Fine Art Albums',
            icon: '/photography-services/print.svg',
        },
    ],
};

// Aliased as MY_STACK to maintain zero breaking changes with existing components
export const MY_STACK = MY_SERVICES;

export const PROJECTS: IProject[] = [
    {
        title: 'Wedding Celebrations',
        slug: 'wedding-celebrations',
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2024,
        description: `
      An intimate, high-vibrance wedding celebration documenting the union of two souls. Captured with natural lighting and editorial composition, highlighting timeless rituals, emotional tears, and heartfelt joy.<br/> <br/>
      
      Key Highlights:<br/>
      <ul>
        <li>💍 Traditional Ceremonies: Precision timing capturing sacred rituals and customs</li>
        <li>✨ Grand Reception: Dynamic evening ambient lighting and cinematic couple portraits</li>
        <li>📸 Candid Expressions: Unfiltered family interactions and joyful tears</li>
        <li>🎨 Master Color Grading: Warm, rich natural tones preserving authentic skin tones</li>
        <li>📖 Custom Keepsake Album: Handcrafted 4K resolution fine-art print delivery</li>
      </ul><br/>
      
      Creative & Technical Execution:
      <ul>
        <li>Multi-camera dual prime setups (35mm f/1.4 & 85mm f/1.2) for creamy bokeh and sharpness</li>
        <li>Subtle on-location off-camera flash for crisp, non-intrusive nighttime coverage</li>
        <li>Comprehensive pre-event lighting scout ensuring pristine exposures across varied venue lighting</li>
      </ul>
      `,
        role: `
      Lead Photographer & Creative Director <br/>
      Directed the entire photographic journey:
      <ul>
        <li>✅ Visual Direction: Curated storyboards, moodboards, and shot lists with the couple</li>
        <li>🎨 Live Coverage: Led 2 senior shooters and drone pilot throughout the multi-day celebrations</li>
        <li>🔄 Post-Production: High-end manual retouching, skin refinement, and atmospheric grading</li>
        <li>📦 Delivery: Delivered online client gallery and bespoke leather-bound heirloom album</li>
      </ul>
      `,
        techStack: [
            'Sony Alpha 7R V',
            '85mm f/1.2 GM',
            '35mm f/1.4 GM',
            'Profoto B10X',
            'Adobe Lightroom',
            'Capture One Pro',
        ],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
    },
    {
        title: 'Editorial Portraits',
        slug: 'editorial-portraits',
        techStack: [
            'Hasselblad X2D',
            'Medium Format',
            '50mm f/1.2',
            'Broncolor Studio Kit',
            'Capture One',
            'Fine-art Retouching',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
        ],
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2024,
        description: `A studio and environmental editorial portrait gallery highlighting personality, character depth, and striking gaze. Balancing dramatic chiaroscuro shadows with delicate high-key fills, this series explores emotional resonance and sculpted contours.`,
        role: `Lead Portrait Photographer: <br/>
        - Crafted bespoke studio lighting setups tailored to individual bone structure and mood.<br/>
        - Guided natural posing and expression elicitation for genuine intimacy.<br/>
        - Executed high-end dodge and burn, frequency separation, and color harmony calibration in Capture One and Photoshop.<br/>
        - Delivered magazine-ready digital assets and large-format gallery prints.`,
    },
    {
        title: 'Pre-Wedding Stories',
        slug: 'pre-wedding-stories',
        techStack: [
            'Canon EOS R5',
            '28-70mm f/2L',
            'Natural Golden Hour',
            'Drone 4K',
            'Adobe Lightroom',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2023,
        description:
            'A scenic romance photo story captured during sunset golden hours across picturesque natural landscapes and architectural landmarks. Emphasizing fluid movement, laughter, and effortless chemistry between the couple in serene outdoor environments.',
        role: `Lead Destination Photographer:<br/>
        - Location scouting and golden-hour timing coordination for optimal natural diffusion.<br/>
        - Directing spontaneous movement, micro-interactions, and scenic wide-angle compositions.<br/>
        - Advanced aerial drone compositions showcasing couple scale against monumental scenery.`,
    },
    {
        title: 'Grand Cultural Events',
        slug: 'grand-cultural-events',
        techStack: [
            'Sony FX3',
            '70-200mm f/2.8 GM II',
            '24-70mm f/2.8',
            'Godox AD400 Pro',
            'Speedlight Strobist',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2023,
        description:
            'Dynamic coverage of high-profile cultural festivals, private galas, and musical celebrations. Capturing high-speed choreography, expressive stage performances, and vibrant guest participation under challenging, fast-shifting venue lights.',
        role: `Lead Event Photographer:<br/>
        - Fast-paced tracking and rapid focus acquisition in high dynamic range environments.<br/>
        - Multi-zone wireless flash deployment for consistent ambient fill across grand banquet halls.<br/>
        - Real-time media curation and express turnaround for press and social media broadcasts.`,
    },
    {
        title: 'High Fashion & Couture',
        slug: 'high-fashion-couture',
        techStack: ['Phase One', 'Medium Format', 'Beauty Dish', 'Elinchrom', 'Photoshop'],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2023,
        description:
            'Commercial couture lookbook and editorial fashion shoot highlighting fabric texture, silhouette precision, and bold avant-garde styling. Crafted for designer campaigns and luxury publication features.',
        role: `Fashion Photographer & Creative Director:<br/>
        - Collaborated with wardrobe stylists, makeup artists, and creative leads.<br/>
        - Engineered crisp, high-contrast lighting emphasizing luxury garment weaves and reflective embellishments.`,
    },
    {
        title: 'Candid & Lifestyle',
        slug: 'candid-moments-lifestyle',
        techStack: ['Leica Q3', '28mm f/1.7', 'Natural Light', 'Documentary', 'Monochrome'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        liveUrl: 'mailto:Ajmeranaresh391@gmail.com',
        year: 2023,
        description: `Authentic, unposed slice-of-life storytelling celebrating genuine human connection, quiet introspection, and everyday magic. Captured with unobtrusive street and documentary photojournalism techniques.`,
        role: `Documentary Photographer:<br/>
        - Discreet observational shooting preserving spontaneous authenticity.<br/>
        - Master tone curation with deep blacks and rich analog-inspired color profiles.`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Lead Photographer & Founder',
        company: 'Sidhu Photography Studio',
        duration: '2021 - Present',
    },
    {
        title: 'Senior Wedding & Event Photographer',
        company: 'Royal Heritage Media',
        duration: '2019 - 2021',
    },
    {
        title: 'Fashion & Editorial Photographer',
        company: 'Studio Lumina Visuals',
        duration: '2018 - 2019',
    },
    {
        title: 'Assistant Photographer & Retoucher',
        company: 'Aura Lens Productions',
        duration: '2016 - 2018',
    },
];
