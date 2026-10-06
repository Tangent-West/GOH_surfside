/*
 * Native educational chapter content for the GOH single-page site.
 *
 * Each record uses the same rendering vocabulary: a photo-led hero, a short
 * introduction, three to five editorial sections, an optional click-to-play
 * film, a plainly worded qualification and a source list. The copy preserves
 * the substance of the original GOH education pages while keeping medical,
 * regulatory and market claims appropriately scoped.
 */
window.GOH_CHAPTERS = [
  {
    slug: 'agriculture',
    route: '/learn/hemp-agriculture/',
    title: 'Hemp Agriculture',
    eyebrow: 'Educational library · Agriculture',
    summary: 'Field to finished product: grain, fiber and floral pathways, trichomes, compliance and the markets connected to the farm.',
    hero: {
      title: 'From field to finished product.',
      image: 'assets/chapters/agriculture/HempFiberFieldtractormtns.jpg',
      alt: 'A tractor working through a hemp field with mountains in the distance'
    },
    intro: [
      'Hemp is one of the most versatile crops grown today. Depending on the variety and its intended market, farmers may cultivate hemp for its seed, stalk or flower—each with a different route from harvest to customer.',
      'Food ingredients and animal feed begin with grain. Textiles, nonwovens and building materials begin with stalk. Cannabinoid ingredients used in some wellness products and beverages begin with flower. Like corn, soybeans or cotton, every one of these supply chains starts on a farm.'
    ],
    sections: [
      {
        id: 'three-pathways',
        kicker: 'Three ways hemp is grown',
        title: 'One crop, three distinct production pathways.',
        paragraphs: [
          'The intended end use shapes seed selection, planting density, harvest timing, equipment and post-harvest handling. Treating every acre as though it produces the same material obscures how farmers and processors actually work.'
        ],
        cards: [
          {
            title: 'Grain hemp',
            text: 'Grain hemp is grown primarily for seed. It can be planted and harvested with equipment similar to that used for wheat, barley and canola.',
            image: 'assets/chapters/agriculture/HempGrainHarvets.jpg',
            alt: 'A combine harvesting a mature hemp grain field',
            bullets: ['Hemp hearts', 'Hemp seed oil', 'Hemp protein', 'Potential animal-feed ingredients where approved']
          },
          {
            title: 'Fiber hemp',
            text: 'Fiber hemp is grown for the stalk. The long outer bast fiber and woody inner hurd become inputs for different manufacturing systems.',
            image: 'assets/chapters/agriculture/HempFiberHarvest.jpg',
            alt: 'Cut hemp stalks laid in rows during a fiber harvest',
            bullets: ['Textiles and nonwovens', 'Building materials', 'Animal bedding', 'Paper and composites']
          },
          {
            title: 'Floral hemp',
            text: 'Floral hemp is grown for flowers that contain naturally occurring cannabinoids and aromatic compounds. Production may resemble horticulture more than conventional row-crop farming.',
            image: 'assets/chapters/agriculture/Cultivaris_Floral_detail.jpg',
            alt: 'Close view of a flowering hemp plant',
            bullets: ['Cannabinoid ingredients', 'Full-spectrum extracts', 'Product formulation inputs', 'Research material']
          }
        ]
      },
      {
        id: 'trichomes',
        kicker: 'Plant science',
        title: 'What are trichomes?',
        paragraphs: [
          'Trichomes are tiny glandular structures found on the surface of hemp flowers. They produce and store many of the plant’s cannabinoids and terpenes.',
          'Cannabinoids are concentrated in the flower rather than the seed or stalk. That botanical difference helps explain why floral production has a different risk, testing and compliance profile from grain and fiber production.'
        ],
        image: 'assets/chapters/agriculture/Cultivaris_Dev_Growing.jpg',
        imageAlt: 'Young hemp plants growing in a controlled production setting'
      },
      {
        id: 'value-chain',
        kicker: 'From acre to application',
        title: 'The crop becomes useful through a connected value chain.',
        paragraphs: [
          'A successful harvest is only the first step. Drying, cleaning, storage, primary processing, ingredient or material specifications, manufacturing and dependable buyers all affect whether an acre creates lasting value.'
        ],
        cards: [
          {title: '1 · Grow', text: 'Match genetics and agronomy to a defined end market before the seed goes into the ground.'},
          {title: '2 · Handle', text: 'Harvest, dry, clean and store the crop in a way that protects the quality needed downstream.'},
          {title: '3 · Process', text: 'Convert seed, stalk or flower into a consistent ingredient or manufacturing input.'},
          {title: '4 · Make', text: 'Build products to specifications that buyers, regulators and consumers can understand.'}
        ]
      },
      {
        id: 'compliance',
        kicker: 'Compliance & regulation',
        title: 'Production rules begin with federal, state and Tribal plans.',
        paragraphs: [
          'USDA’s Domestic Hemp Production Program governs hemp production through approved State and Tribal plans and a federal plan. Its requirements address licensing, records, sampling, testing, disposal or remediation of noncompliant plants and other production obligations.',
          'USDA regulates production; food, animal-feed, consumer-product and other downstream rules involve different federal, state and local authorities. Requirements vary by product and jurisdiction, so a compliant crop is not the same thing as an automatically approved finished product.',
          'The Goodness of Hemp supports policy that recognizes the practical differences between industrial grain-and-fiber production and floral cannabinoid production while preserving clear accountability.'
        ],
        callout: {
          title: 'Ready for a larger market',
          text: 'American farmers, processors and manufacturers are building the consistency, standards and partnerships needed to participate in domestic and global supply chains. Market access still depends on product specifications, regulation and the requirements of each destination.'
        }
      },
      {
        id: 'next-chapter',
        kicker: 'Follow the crop',
        title: 'Continue from the field into food, feed and materials.',
        paragraphs: [
          'The remaining chapters follow each pathway beyond the farm: seed into food and feed, stalk into materials, and flower into cannabinoid, wellness and beverage products.'
        ],
        links: [
          {label: 'Explore hemp food', route: '/learn/hemp-food/'},
          {label: 'Explore animal feed', route: '/learn/hemp-animal-feed/'},
          {label: 'Explore hemp materials', route: '/learn/hemp-materials/'}
        ]
      }
    ],
    video: {
      youtubeId: 'IXEIVMaMOfk',
      title: 'The GOOD Agriculture Story',
      caption: 'A click-to-play field story about the people and production behind American hemp.'
    },
    disclaimer: {
      title: 'Production context',
      text: 'This chapter is general education, not legal, agronomic or compliance advice. Current federal, state, Tribal and local requirements—and the requirements attached to a buyer or end use—should be confirmed before planting, processing or selling hemp.'
    },
    citations: [
      {label: 'USDA Agricultural Marketing Service · Hemp laws and regulations', url: 'https://www.ams.usda.gov/rules-regulations/hemp/HempLawsandRegulations'},
      {label: 'USDA Agricultural Marketing Service · Domestic Hemp Production Program final rule', url: 'https://www.ams.usda.gov/rules-regulations/establishment-domestic-hemp-production-program'},
      {label: 'Electronic Code of Federal Regulations · 7 CFR Part 990', url: 'https://www.ecfr.gov/current/title-7/subtitle-B/chapter-IX/part-990'},
      {label: 'USDA National Agricultural Statistics Service · 2025 National Hemp Report', url: 'https://www.nass.usda.gov/Publications/Todays_Reports/reports/hempan26.pdf'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/agriculture'
  },
  {
    slug: 'food',
    route: '/learn/hemp-food/',
    title: 'Hemp Food',
    eyebrow: 'Educational library · Food',
    summary: 'Harvest to ingredient: hemp hearts, seed oil, protein and fiber, with the food-regulatory distinctions that matter.',
    hero: {
      title: 'Nutrition rooted in nature.',
      image: 'assets/chapters/food/hemphearts_granola.png',
      alt: 'A bowl of granola topped with hemp hearts and fruit'
    },
    intro: [
      'Long before hemp became a modern material or wellness story, its seed was valued as food. Today, hemp seed is cleaned and processed into familiar ingredients including hulled hemp hearts, cold-pressed oil and protein-rich meal.',
      'Every ingredient has a different composition and intended use. Clear labels and product-specific rules help distinguish traditional seed-derived foods from products containing added cannabinoids.'
    ],
    sections: [
      {
        id: 'harvest-to-ingredient',
        kicker: 'From harvest to ingredient',
        title: 'A seed can follow more than one path.',
        paragraphs: [
          'After harvest, seed is cleaned and conditioned before it is hulled, pressed, milled or used whole. Each process creates a different ingredient and may also produce useful co-products.'
        ],
        image: 'assets/chapters/food/Source_Hemp_Seed_2026.jpg',
        imageAlt: 'Clean hemp seed ready for food processing',
        cards: [
          {title: 'Hulling', text: 'Removing the outer shell produces tender hemp hearts and separates a fiber-rich hull fraction.'},
          {title: 'Oil pressing', text: 'Mechanical pressing separates hemp seed oil from a protein- and fiber-containing meal.'}
        ]
      },
      {
        id: 'ingredients',
        kicker: 'Everyday forms',
        title: 'Four useful ingredients from hemp seed.',
        paragraphs: [
          'Flavor, texture and composition vary by cultivar and processing method. Manufacturers select an ingredient based on the recipe, specification and applicable food rules.'
        ],
        cards: [
          {
            title: 'Hemp hearts',
            text: 'Hulled seed with a mild, nutty flavor and soft texture.',
            image: 'assets/chapters/food/Food_HempHearts.png',
            alt: 'A serving of hulled hemp hearts',
            bullets: ['Smoothies and yogurt', 'Salads and oatmeal', 'Baking and snack products']
          },
          {
            title: 'Hemp seed oil',
            text: 'Oil pressed from seed, generally used where a light, nutty flavor is welcome.',
            image: 'assets/chapters/food/Food_HempSeedOil.png',
            alt: 'A bottle and bowl of hemp seed oil',
            bullets: ['Dressings and dips', 'Finishing oil', 'Formulated foods']
          },
          {
            title: 'Hemp protein',
            text: 'A milled ingredient made from the solids that remain after oil pressing.',
            image: 'assets/chapters/food/Food_HempMeal.png',
            alt: 'Hemp protein meal prepared as a food ingredient',
            bullets: ['Protein shakes', 'Nutrition bars', 'Baking mixes and meal products']
          },
          {
            title: 'Hulls and fiber ingredients',
            text: 'Fractions from the seed coat are being developed for fiber-rich food applications.',
            image: 'assets/chapters/food/Source_Hemp_Seed.jpg',
            alt: 'Whole hemp seed showing its outer hull',
            bullets: ['Fiber fortification', 'Baking applications', 'Emerging food products']
          }
        ]
      },
      {
        id: 'nutrition',
        kicker: 'Naturally nutritious',
        title: 'Protein, fats and minerals in a compact seed.',
        paragraphs: [
          'Hulled hemp seed provides protein and predominantly unsaturated fats, including omega-6 and omega-3 fatty acids. Whole seed and hull fractions provide more dietary fiber than a fully hulled heart. Hemp seed foods may also contribute minerals such as magnesium, phosphorus, iron and zinc.',
          'Exact nutrient values depend on the ingredient, serving size, cultivar and processing. Nutrition Facts labels—not generalized category claims—are the right source for the composition of a specific product.'
        ],
        callout: {
          title: 'A complete seed protein',
          text: 'Hemp seed contains all nine amino acids classified as essential in the human diet. “Complete” describes amino-acid presence; it does not mean every product has the same protein quantity, digestibility or role in a person’s diet.'
        }
      },
      {
        id: 'food-rules',
        kicker: 'Food-regulatory context',
        title: 'Seed ingredients and cannabinoids are not interchangeable.',
        paragraphs: [
          'In 2018, FDA responded with no questions to three GRAS notices covering hulled hemp seed, hemp seed protein powder and hemp seed oil under the conditions described in those notices. Food manufacturers remain responsible for lawful use, safety and accurate ingredient labeling.',
          'That review did not establish the same status for foods with added CBD or THC. FDA states that its conclusions about CBD and THC in interstate food and dietary-supplement markets are different from its treatment of the three specified seed-derived ingredients.'
        ]
      }
    ],
    video: {
      youtubeId: 'IurJlRvXcGw',
      title: 'The GOOD Food Story',
      caption: 'See how the agricultural story continues as hemp seed becomes an ingredient.'
    },
    disclaimer: {
      title: 'Food context',
      text: 'This chapter offers general food education and does not make a health claim or determine whether a particular ingredient, formulation or label complies with federal, state or local law.'
    },
    citations: [
      {label: 'FDA · Three GRAS notices for hemp seed-derived ingredients', url: 'https://www.fda.gov/food/hfp-constituent-updates/fda-responds-three-gras-notices-hemp-seed-derived-ingredients-use-human-food'},
      {label: 'FDA · Regulation of cannabis and cannabis-derived products, including CBD', url: 'https://www.fda.gov/news-events/public-health-focus/fda-regulation-cannabis-and-cannabis-derived-products-including-cannabidiol-cbd'},
      {label: 'USDA FoodData Central · Food composition database', url: 'https://fdc.nal.usda.gov/'},
      {label: 'USDA National Agricultural Statistics Service · 2025 National Hemp Report', url: 'https://www.nass.usda.gov/Publications/Todays_Reports/reports/hempan26.pdf'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/food'
  },
  {
    slug: 'feed',
    route: '/learn/hemp-animal-feed/',
    title: 'Animal Feed',
    eyebrow: 'Educational library · Feed',
    summary: 'Food-to-feed pathways, nutrient-rich co-products, species-specific research and the approval context for animal food.',
    hero: {
      title: 'Goodness beyond the dinner table.',
      image: 'assets/chapters/feed/Chickens_8103.jpg',
      alt: 'Chickens in a farmyard representing one researched hemp-feed pathway'
    },
    intro: [
      'Many food systems create co-products that can become animal-feed ingredients. Hemp seed processing can do the same: after oil is pressed or seed is hulled, nutrient-containing material remains.',
      'Using those co-products can extend the value of a crop, but animal food is species-specific and regulated. Safety, ingredient consistency and the status of each proposed use must be established before a material enters feed.'
    ],
    sections: [
      {
        id: 'food-to-feed',
        kicker: 'From food to feed',
        title: 'One seed can support two connected markets.',
        paragraphs: [
          'Mechanical oil extraction leaves hemp seed meal containing protein, fat, fiber and minerals. Hulling and cleaning can create other fractions. These are potential feed inputs—not automatic feed ingredients—until an applicable definition or approval covers the species and use.'
        ],
        image: 'assets/chapters/feed/hemp_feed_1.jpg',
        imageAlt: 'Hemp seed meal prepared for evaluation as an animal-feed ingredient',
        cards: [
          {title: 'Food production', text: 'Seed becomes hearts, culinary oil and human-food ingredients.'},
          {title: 'Co-product recovery', text: 'Meal and other fractions retain nutrients that may have feed value.'},
          {title: 'Species-specific review', text: 'Safety, composition, contaminants and appropriate inclusion rates are evaluated for a defined animal class.'}
        ]
      },
      {
        id: 'research',
        kicker: 'A growing area of research',
        title: 'Feed questions change from one animal to another.',
        paragraphs: [
          'Digestive systems, nutritional needs, food-producing status and potential transfer of compounds into meat, milk or eggs all affect an ingredient review. Research areas have included laying hens, other poultry and livestock, aquaculture, horses and companion animals, but the status of a use cannot be inferred from research interest alone.'
        ],
        cards: [
          {title: 'Food-producing animals', text: 'Evaluation considers animal safety and performance as well as the safety of food derived from the animal.'},
          {title: 'Horses and companion animals', text: 'Interest is growing, but a marketed product or study does not by itself establish a lawful feed use.'},
          {title: 'Ingredient consistency', text: 'Definitions and approvals depend on a reproducible ingredient, manufacturing process and contaminant controls.'}
        ]
      },
      {
        id: 'approval',
        kicker: 'Feed regulation & approval',
        title: 'The current pathway is narrow and clearly defined.',
        paragraphs: [
          'AAFCO’s 2024 tentative definition for mechanically extracted hemp seed meal specifies use in laying-hen diets at no more than 20 percent of the diet and includes composition and cannabinoid limits. Adoption and enforcement still depend on the relevant jurisdiction.',
          'Minnesota, for example, identifies hemp seed meal for laying hens under those conditions and explains that this does not authorize feeding it to other species. Federal and state animal-food requirements continue to apply.'
        ],
        image: 'assets/chapters/feed/HFC_Logo.png',
        imageAlt: 'Hemp Feed Coalition logo',
        imageFit: 'contain',
        callout: {
          title: 'Science before scale',
          text: 'The Goodness of Hemp supports a transparent, science-based pathway for additional uses where evidence can address animal safety, human-food safety, manufacturing consistency and appropriate labeling.'
        }
      },
      {
        id: 'future',
        kicker: 'The future of hemp feed',
        title: 'A more circular agricultural economy.',
        paragraphs: [
          'When a lawful, well-characterized co-product becomes a useful feed ingredient, farmers and processors can capture more value from the same acre and reduce waste across the food chain.',
          'Reaching that future requires ongoing research, complete regulatory submissions, reliable testing and clear communication about which uses are actually permitted.'
        ],
        image: 'assets/chapters/feed/EquineSunset_KR-31.jpg',
        imageAlt: 'A horse and handler at sunset'
      }
    ],
    video: {
      youtubeId: 'IXEIVMaMOfk',
      title: 'The GOOD Feed Story',
      caption: 'A click-to-play look at the farm and food-chain context behind hemp feed.'
    },
    disclaimer: {
      title: 'Feed context',
      text: 'Animal-food approvals are ingredient-, species-, use- and jurisdiction-specific. This chapter is general education, not a determination that a particular hemp ingredient may be fed to a particular animal.'
    },
    citations: [
      {label: 'AAFCO · 2024 Ingredient Definitions Committee report', url: 'https://www.aafco.org/wp-content/uploads/2024/04/6.-Minutes.Ingredient-Definitions-Committee-Report-Jan.2024.pdf'},
      {label: 'Minnesota Department of Agriculture · Hemp seed meal available for feed', url: 'https://www.mda.state.mn.us/hemp-seed-meal-available-feed-minnesota'},
      {label: 'FDA Center for Veterinary Medicine · Animal food additive petitions', url: 'https://www.fda.gov/animal-veterinary/development-approval-process/food-additive-petitions-animal-food'},
      {label: 'Hemp Feed Coalition', url: 'https://hempfeedcoalition.org/'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/feed'
  },
  {
    slug: 'cannabinoids',
    route: '/learn/hemp-cannabinoids/',
    title: 'Cannabinoids',
    eyebrow: 'Educational library · Cannabinoids',
    summary: 'CBD, CBG, CBN and THC; the endocannabinoid system; minor cannabinoids; and the limits of current evidence.',
    hero: {
      title: 'Naturally occurring compounds found in hemp.',
      image: 'assets/chapters/cannabinoids/Senior_hiking.jpg',
      alt: 'Two adults hiking outdoors in a hemp education photograph'
    },
    intro: [
      'Cannabinoids are a group of chemical compounds produced by Cannabis sativa. Researchers have identified more than 100, but only a small number have been studied extensively.',
      'Interest in a cannabinoid, its presence in a product and evidence that a specific drug works are three different things. Product form, dose, route of administration, interactions and legal status all matter.'
    ],
    sections: [
      {
        id: 'ecs',
        kicker: 'The endocannabinoid system',
        title: 'A signaling network that helps the body maintain balance.',
        paragraphs: [
          'The endocannabinoid system includes naturally produced signaling molecules, receptors and enzymes. It participates in processes including mood, memory, appetite, sleep, immune activity and pain signaling.',
          'Plant cannabinoids can interact with this system in different ways. Those mechanisms are an active research area; a proposed mechanism is not proof that a consumer product prevents, treats or cures a condition.'
        ],
        image: 'assets/chapters/cannabinoids/cannab_system.svg',
        imageAlt: 'Illustration of the human endocannabinoid system'
      },
      {
        id: 'common-cannabinoids',
        kicker: 'Common cannabinoids',
        title: 'Similar names, different profiles.',
        paragraphs: [
          'The amounts and combinations found in a plant or product vary. Labels should identify what is present and provide the information consumers need to evaluate a serving.'
        ],
        cards: [
          {title: 'CBD · Cannabidiol', text: 'A non-intoxicating cannabinoid found in hemp and the active ingredient in one FDA-approved prescription drug. That drug approval does not extend to other CBD products.'},
          {title: 'CBG · Cannabigerol', text: 'A cannabinoid generally present in smaller amounts. Consumer interest is ahead of the clinical evidence needed for broad health conclusions.'},
          {title: 'CBN · Cannabinol', text: 'A cannabinoid that can form as THC changes over time. Its frequent appearance in products marketed for nighttime use is not, by itself, proof of a sleep benefit.'},
          {title: 'THC · Tetrahydrocannabinol', text: 'The principal intoxicating cannabinoid in cannabis at sufficient exposure. Hemp may contain THC within applicable legal limits, and full-spectrum products may contain trace amounts.'}
        ]
      },
      {
        id: 'minor-cannabinoids',
        kicker: 'More and more cannabinoids',
        title: 'The long list is a research map, not a catalog of proven benefits.',
        paragraphs: [
          'CBDA, THCA, CBGA, CBC, THCV, CBDV, CBGV, CBCA, CBT and CBL are among the compounds discussed in scientific and product-development settings. Many remain lightly studied in people.',
          'Responsible education keeps analytical identification, preclinical research, clinical evidence and authorized health claims separate.'
        ],
        image: 'assets/chapters/cannabinoids/CBD_oil_research.jpg',
        imageAlt: 'A dropper bottle beside laboratory equipment'
      },
      {
        id: 'evidence-rules',
        kicker: 'Evidence & regulation',
        title: 'A hemp label does not establish safety, efficacy or approval.',
        paragraphs: [
          'FDA has approved certain prescription drugs that contain or relate to individual cannabinoids, but it has not approved the cannabis plant as a treatment. Over-the-counter cannabinoid products are not interchangeable with those prescription products.',
          'FDA and NCCIH also identify possible adverse effects, drug interactions, contamination and label-accuracy concerns. Anyone considering cannabinoids for a health purpose should discuss that decision with a qualified health professional.'
        ]
      }
    ],
    video: {
      youtubeId: 'IurJlRvXcGw',
      title: 'The GOOD Cannabinoid Story',
      caption: 'A click-to-play introduction to cannabinoids and the questions responsible product education should answer.'
    },
    disclaimer: {
      title: 'Health and legal context',
      text: 'This chapter is educational and is not medical advice, a therapeutic claim or a statement that any nonprescription cannabinoid product is FDA-approved. Laws and product status vary by formulation and jurisdiction.'
    },
    citations: [
      {label: 'NIH National Center for Complementary and Integrative Health · Cannabis and cannabinoids', url: 'https://www.nccih.nih.gov/health/cannabis-marijuana-and-cannabinoids-what-you-need-to-know'},
      {label: 'FDA · Regulation of cannabis and cannabis-derived products, including CBD', url: 'https://www.fda.gov/news-events/public-health-focus/fda-regulation-cannabis-and-cannabis-derived-products-including-cannabidiol-cbd'},
      {label: 'USDA Agricultural Marketing Service · Hemp laws and regulations', url: 'https://www.ams.usda.gov/rules-regulations/hemp/HempLawsandRegulations'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/cannabinoids'
  },
  {
    slug: 'materials',
    route: '/learn/hemp-materials/',
    title: 'Hemp Materials',
    eyebrow: 'Educational library · Materials',
    summary: 'Decortication, bast and hurd, followed by construction, textile, nonwoven, animal-care and composite applications.',
    hero: {
      title: 'Strength from the field.',
      image: 'assets/chapters/materials/Fiber_Decort_Image_2026.jpg',
      alt: 'Hemp stalk entering a decortication line'
    },
    intro: [
      'Long before it becomes a textile, panel or building material, hemp is a stalk. Fiber hemp may be grown as a dedicated crop or as part of a dual-purpose system that also harvests grain.',
      'After harvest, retting and primary processing separate the stalk into fractions with different physical properties. Consistent specifications are what turn those fractions into useful manufacturing inputs.'
    ],
    sections: [
      {
        id: 'decortication',
        kicker: 'Decortication',
        title: 'Separating the stalk into bast and hurd.',
        paragraphs: [
          'Decortication mechanically separates the long outer bast fibers from the woody inner core, commonly called hurd or shiv. Cleaning, opening, cutting and refining can prepare each fraction for a particular customer.',
          'Moisture, length, cleanliness, density and other specifications matter. “Hemp fiber” is not one uniform commodity ready for every application.'
        ],
        cards: [
          {
            title: 'Bast fiber',
            text: 'The long outer fiber can be refined for textiles, nonwovens, reinforcement and other fibrous products.',
            image: 'assets/chapters/materials/Bast_Platinum_Detail.jpg',
            alt: 'Cleaned hemp bast fiber detail'
          },
          {
            title: 'Hurd',
            text: 'The lightweight inner core can be sized for animal bedding, hemp-lime construction, absorbent products and other material systems.',
            image: 'assets/chapters/materials/Hurd_Standard-00_Detail.jpg',
            alt: 'Processed hemp hurd detail'
          }
        ]
      },
      {
        id: 'applications',
        kicker: 'Material applications',
        title: 'Different fractions, different jobs.',
        paragraphs: [
          'Hemp’s usefulness comes from matching a processed material to measurable performance needs—not from assuming one crop automatically fits every product.'
        ],
        cards: [
          {title: 'Construction', text: 'Hemp-lime wall systems, insulation, acoustic materials, underlayment and selected geotechnical applications.', image: 'assets/chapters/materials/walls_image.jpg', alt: 'Hemp-lime wall material installed in a building'},
          {title: 'Nonwovens', text: 'Wipes, filtration, packaging, hygiene, automotive and industrial fiber mats.', image: 'assets/chapters/materials/nonwoven_wipe.jpg', alt: 'A nonwoven wipe made with plant fiber'},
          {title: 'Textiles', text: 'Apparel, denim, footwear, upholstery, home textiles and technical fabrics.', image: 'assets/chapters/materials/V_sar_smith_rogue_men_s_benton_hemp_shirt__2857883__e.jpg', alt: 'A shirt made with hemp-blend textile'},
          {title: 'Animal care', text: 'Bedding and nesting materials for horses, poultry, companion animals and other appropriate uses.'},
          {title: 'Composites & advanced materials', text: 'Molded components, consumer goods, industrial composites and emerging bio-based products.', image: 'assets/chapters/materials/Livwire2.png', alt: 'A motorcycle illustrating an advanced manufactured application'}
        ]
      },
      {
        id: 'building',
        kicker: 'Building with hemp',
        title: 'A recognized system still has project-specific requirements.',
        paragraphs: [
          'The 2024 International Residential Code includes Appendix BL for hemp-lime construction. That model-code text is an important reference, but local adoption, permitting, design conditions, material specifications and professional responsibilities still determine what applies to a project.',
          'Other hemp-derived construction products follow their own testing, certification and code pathways. One recognized assembly should not be used to imply blanket approval for every hemp material.'
        ],
        image: 'assets/chapters/materials/Goodness_bucket.jpg',
        imageAlt: 'A Goodness of Hemp bucket surrounded by processed hemp hurd'
      },
      {
        id: 'supply-chain',
        kicker: 'Bringing goodness to everyone',
        title: 'A manufacturing opportunity built on specifications.',
        paragraphs: [
          'Hemp materials invite designers, processors and manufacturers to reconsider where renewable agricultural inputs can perform well. The strongest opportunity is practical: reliable supply, repeatable quality, verified performance and products designed for real markets.',
          'American growers and manufacturers are building capacity for both domestic demand and global supply chains. Competitiveness will depend on standards, logistics, processing scale and the requirements of each destination market.'
        ]
      }
    ],
    video: {
      youtubeId: 'W27A8U_x5ig',
      title: 'The GOOD Materials Story',
      caption: 'A click-to-play look at how a field-grown stalk becomes a manufacturing input.'
    },
    disclaimer: {
      title: 'Performance context',
      text: 'Material and environmental performance depends on feedstock, processing, formulation, testing, installation, service conditions and end-of-life assumptions. This chapter does not certify a product or replace project-specific codes and professional review.'
    },
    citations: [
      {label: 'International Code Council · 2024 IRC Appendix BL, Hemp-Lime Construction', url: 'https://codes.iccsafe.org/content/IRC2024P1/appendix-bl-hemp-lime-hempcrete-construction'},
      {label: 'International Code Council · Code-adoption resources', url: 'https://www.iccsafe.org/advocacy/code-adoption-resources/'},
      {label: 'USDA National Agricultural Statistics Service · 2025 National Hemp Report', url: 'https://www.nass.usda.gov/Publications/Todays_Reports/reports/hempan26.pdf'},
      {label: 'Oregon State University · Global Hemp Innovation Center', url: 'https://agsci.oregonstate.edu/hemp'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/materials'
  },
  {
    slug: 'wellness',
    route: '/learn/hemp-wellness/',
    title: 'Wellness',
    eyebrow: 'Educational library · Wellness',
    summary: 'Common product formats, full-spectrum terminology, quality signals, evidence limits and special context for animal products.',
    hero: {
      title: 'Everyday wellness, clearly explained.',
      image: 'assets/chapters/wellness/Senior_cbd_tincure2.jpg',
      alt: 'An older adult holding a dropper bottle while reading its label'
    },
    intro: [
      'Hemp-derived wellness products appear in a growing range of formats. Consumers may encounter marketing about relaxation, recovery, sleep or general wellbeing, but a product’s popularity or intended use is not evidence that it provides a clinically established benefit.',
      'Responsible product education starts with what the product contains, how it is used, what testing supports the label and what the available evidence can—and cannot—show.'
    ],
    sections: [
      {
        id: 'formats',
        kicker: 'Common product formats',
        title: 'The format changes how a product is used.',
        paragraphs: [
          'Serving information, onset, duration, ingredients and risks can differ by format. Products should be evaluated individually rather than treated as interchangeable.'
        ],
        cards: [
          {title: 'Tinctures & oils', text: 'Liquid products measured by dropper. Labels should make the amount per serving and the complete ingredient list easy to find.', image: 'assets/chapters/wellness/Wellness_Tincures.png', alt: 'A dropper bottle representing hemp tinctures and oils'},
          {title: 'Gummies', text: 'Edible products with a familiar format. Clear serving directions and packaging that reduces accidental consumption are especially important.', image: 'assets/chapters/wellness/cbd_gummies.png', alt: 'Gummy products in a hemp wellness display'},
          {title: 'Capsules', text: 'Premeasured oral products. A consistent unit does not eliminate the need to evaluate ingredients, evidence, interactions and label accuracy.', image: 'assets/chapters/wellness/Wellness_Gelcaps.png', alt: 'Capsules used to illustrate a wellness product format'},
          {title: 'Topicals', text: 'Creams, balms and lotions applied to the skin. Claims and ingredients determine the regulatory and evidence questions a product raises.', image: 'assets/chapters/wellness/Wellness_BalmsCream.png', alt: 'A jar of topical balm beside hemp leaves'}
        ]
      },
      {
        id: 'full-spectrum',
        kicker: 'Read the label',
        title: 'What does “full spectrum” mean?',
        paragraphs: [
          'In the marketplace, “full spectrum” generally describes an extract intended to retain a range of naturally occurring cannabinoids, terpenes and other plant compounds. Such products may contain trace THC.',
          'The phrase is not a promise of a particular clinical effect. Consumers should look for the actual cannabinoid amounts, serving size, ingredient list, test information and warnings on the specific product.'
        ]
      },
      {
        id: 'quality',
        kicker: 'Quality matters',
        title: 'Transparency makes a product easier to evaluate.',
        paragraphs: [
          'Testing and documentation do not establish a health benefit, but they can help address identity, potency, contaminants and manufacturing consistency.'
        ],
        image: 'assets/chapters/wellness/capsule_testing.jpg',
        imageAlt: 'Capsules and laboratory equipment representing product testing',
        bullets: [
          'Third-party testing from a qualified laboratory',
          'A batch or lot connection between the product and its test result',
          'Clearly identified ingredients and cannabinoid amounts',
          'Responsible manufacturing and accurate labeling',
          'Age-appropriate marketing and protective packaging where applicable',
          'No unsupported disease-treatment or cure claims'
        ]
      },
      {
        id: 'animals',
        kicker: 'Hemp wellness for animals',
        title: 'Interest is growing; the evidence and rules still matter.',
        paragraphs: [
          'Hemp-derived products are also marketed for companion animals and horses. Animals can respond differently from people, and a human product may contain ingredients that are inappropriate for an animal.',
          'Research continues, but broad conclusions about safety and benefit cannot be drawn from popularity or marketing. Pet owners should discuss animal health questions with a veterinarian and verify the status of any proposed product or ingredient.'
        ],
        image: 'assets/chapters/wellness/Wellness_equine.jpg',
        imageAlt: 'A horse with a veterinary professional in an educational hemp-wellness photograph'
      }
    ],
    video: {
      youtubeId: 'IurJlRvXcGw',
      title: 'The GOOD Wellness Story',
      caption: 'A click-to-play overview of the people, products and questions behind the wellness category.'
    },
    disclaimer: {
      title: 'Health context',
      text: 'This chapter is educational, not medical or veterinary advice, and it does not claim that a nonprescription hemp or cannabinoid product prevents, diagnoses, treats or cures a condition. FDA has not approved most products sold in this category.'
    },
    citations: [
      {label: 'NIH National Center for Complementary and Integrative Health · Cannabis and cannabinoids', url: 'https://www.nccih.nih.gov/health/cannabis-marijuana-and-cannabinoids-what-you-need-to-know'},
      {label: 'FDA · Regulation of cannabis and cannabis-derived products, including CBD', url: 'https://www.fda.gov/news-events/public-health-focus/fda-regulation-cannabis-and-cannabis-derived-products-including-cannabidiol-cbd'},
      {label: 'FDA · What to know about cannabis-derived products, including CBD', url: 'https://www.fda.gov/consumers/consumer-updates/what-you-need-know-and-what-were-working-find-out-about-products-containing-cannabis-or-cannabis'},
      {label: 'Federal Trade Commission · Health-claims guidance', url: 'https://www.ftc.gov/business-guidance/advertising-marketing/health-claims'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/wellness'
  },
  {
    slug: 'beverages',
    route: '/learn/hemp-beverages/',
    title: 'Hemp Beverages',
    eyebrow: 'Educational library · Beverages',
    summary: 'Flower to beverage: extraction, formulation, manufacturing, policy and consumer-safety principles for a developing category.',
    hero: {
      title: 'A new kind of social beverage.',
      image: 'assets/chapters/beverages/BEVERAGE_trio_edit.jpg',
      alt: 'Three people raising canned beverages at an outdoor gathering'
    },
    intro: [
      'Consumers have more beverage choices than ever. Hemp-derived cannabinoid drinks have emerged as one option in a changing social-beverage market, often positioned around measured servings and occasions where a consumer may be looking for an alternative to alcohol.',
      'The category also raises important questions about formulation, testing, age restrictions, labeling, packaging, marketing and the line between a policy proposal and current law.'
    ],
    sections: [
      {
        id: 'flower-to-beverage',
        kicker: 'From flower to beverage',
        title: 'A farm ingredient becomes a formulated product.',
        paragraphs: [
          'Most hemp beverages begin with floral hemp grown for cannabinoid production. After harvest, flowers are processed to extract naturally occurring compounds. Those extracts are refined and incorporated into beverage formulations designed to deliver a declared amount per serving.',
          'Because cannabinoids are oil-based, formulators often use emulsion technology to disperse them in a water-based drink. Finished-product testing is still necessary to evaluate identity, potency, contaminants, stability and serving consistency.'
        ],
        image: 'assets/chapters/beverages/Bev_manufacturing_crop.jpg',
        imageAlt: 'Stainless-steel beverage manufacturing equipment',
        cards: [
          {title: '1 · Extract', text: 'Recover and refine the intended compounds from floral hemp.'},
          {title: '2 · Formulate', text: 'Build flavor, acidity, sweetening and the cannabinoid-delivery system into a stable recipe.'},
          {title: '3 · Test', text: 'Check the finished product against its label and safety specifications.'},
          {title: '4 · Package', text: 'Use clear serving information, responsible branding and safeguards appropriate to the product.'}
        ]
      },
      {
        id: 'innovation',
        kicker: 'The goodness of innovation',
        title: 'Consistency is a manufacturing challenge.',
        paragraphs: [
          'Emulsification can help oil-based cannabinoid ingredients disperse through a water-based beverage. The formulation must also remain stable through production, shipping and shelf life.',
          'A controlled recipe and measured package can make a serving easier to understand, but individual response still varies. Consumers should read labels, start cautiously, avoid driving or operating machinery after consuming an intoxicating product, and never combine products casually.'
        ],
        image: 'assets/chapters/beverages/beverage_pour.jpg',
        imageAlt: 'A formulated beverage being poured into a glass'
      },
      {
        id: 'consumer-choice',
        kicker: 'A developing category',
        title: 'Choice should come with clarity.',
        paragraphs: [
          'People may explore hemp beverages for social occasions, measured servings or as an alternative to an alcoholic drink. Those motivations are consumer preferences, not proof of health benefit or risk-free use.',
          'Products differ in cannabinoid type and amount, package size, ingredients and legal status. “Low dose” is a marketplace description, not a universal safety threshold.'
        ],
        image: 'assets/chapters/beverages/BEVERAGE_Tangerine_edit.jpg',
        imageAlt: 'A canned hemp beverage with citrus fruit'
      },
      {
        id: 'policy-safety',
        kicker: 'Policy & consumer safety',
        title: 'Regulate the category around clear safeguards.',
        paragraphs: [
          'The Goodness of Hemp supports a regulated pathway built around testing, accurate labels, manufacturing controls, traceability, responsible marketing and retail accountability. Age restrictions and packaging that reduces accidental consumption are central to that approach.',
          'The campaign’s framework has discussed a proposed maximum of 3.7 milligrams of THC per serving for a federal sealed-beverage pathway. That number describes an advocacy proposal; it is not a statement of current nationwide law, a clinical safety finding or permission to sell a product in every jurisdiction.'
        ],
        bullets: [
          'Independent potency and contaminant testing',
          'Declared amount per serving and per package',
          'Ingredient, warning and manufacturer information',
          'Age-gated sale and responsible marketing',
          'Protective packaging and retail accountability',
          'Rules that are clear to consumers and enforceable across the supply chain'
        ],
        image: 'assets/chapters/beverages/Beverage_Can_line.jpg',
        imageAlt: 'Cans moving through a beverage packaging line'
      }
    ],
    video: {
      youtubeId: '5yCeN-puFt4',
      title: 'The GOOD Beverage Story',
      caption: 'A click-to-play introduction to formulation, consumer choice and responsible beverage policy.'
    },
    disclaimer: {
      title: 'Policy and consumer context',
      text: 'This chapter provides general education and describes a campaign proposal. It is not legal advice, a health claim or a statement that a product is lawful in a particular jurisdiction. Intoxicating products are not for children, pregnant or breastfeeding people, or use before driving.'
    },
    citations: [
      {label: 'FDA · Regulation of cannabis and cannabis-derived products, including CBD', url: 'https://www.fda.gov/news-events/public-health-focus/fda-regulation-cannabis-and-cannabis-derived-products-including-cannabidiol-cbd'},
      {label: 'NIH National Center for Complementary and Integrative Health · Cannabis and cannabinoids', url: 'https://www.nccih.nih.gov/health/cannabis-marijuana-and-cannabinoids-what-you-need-to-know'},
      {label: 'National Hemp Association · Plan, Don’t Ban', url: 'https://nationalhempassociation.org/plan-dont-ban/'},
      {label: 'Whitney Economics · U.S. cannabis and hemp beverage report', url: 'https://www.prod.whitneyeconomics.com/press-detail/whitney-economics-issues-u.s.-cannabis-and-hemp-beverage-report-thc-beverage-sales-top-%241.1b'}
    ],
    legacyUrl: 'https://thegoodnessofhemp.org/beverages'
  }
];
