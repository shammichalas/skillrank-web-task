
export interface Recipe {
  id: string;
  title: string;
  category: 'comforting' | 'party' | 'romantic' | 'healthy';
  imageUrl: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Creamy Tomato Pasta',
    category: 'comforting',
    imageUrl: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1316&auto=format&fit=crop',
    description: 'A rich and creamy tomato pasta that warms the soul. Perfect for a cozy night in.',
    prepTime: '15 mins',
    cookTime: '25 mins',
    servings: 4,
    ingredients: [
      '1 pound pasta of your choice',
      '2 tablespoons olive oil',
      '1 onion, finely chopped',
      '3 cloves garlic, minced',
      '1 can (28 oz) crushed tomatoes',
      '1 cup heavy cream',
      '1/2 cup grated Parmesan cheese',
      'Fresh basil leaves, for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Bring a large pot of salted water to a boil. Cook pasta according to package directions until al dente.',
      'While pasta cooks, heat olive oil in a large skillet over medium heat.',
      'Add onions and cook until soft and translucent, about 5 minutes.',
      'Add garlic and cook for another 30 seconds until fragrant.',
      'Pour in crushed tomatoes and simmer for 10 minutes.',
      'Reduce heat to low and stir in heavy cream. Simmer for 5 more minutes.',
      'Drain pasta and add to the sauce. Toss to coat.',
      'Stir in Parmesan cheese until melted and sauce is creamy.',
      'Season with salt and pepper to taste.',
      'Garnish with fresh basil leaves before serving.'
    ]
  },
  {
    id: '2',
    title: 'Grilled Vegetable Platter',
    category: 'party',
    imageUrl: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1770&auto=format&fit=crop',
    description: 'Colorful grilled vegetables with a balsamic glaze. A stunning centerpiece for any gathering.',
    prepTime: '20 mins',
    cookTime: '15 mins',
    servings: 8,
    ingredients: [
      '2 zucchinis, sliced lengthwise',
      '2 yellow squash, sliced lengthwise',
      '2 red bell peppers, quartered',
      '1 eggplant, sliced into rounds',
      '1 red onion, cut into wedges',
      '1/4 cup olive oil',
      '3 tablespoons balsamic vinegar',
      '2 cloves garlic, minced',
      '1 tablespoon Italian herbs',
      'Salt and pepper to taste',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'In a small bowl, whisk together olive oil, balsamic vinegar, garlic, and Italian herbs.',
      'Brush the vegetables with the marinade and season with salt and pepper.',
      'Grill vegetables until tender and lightly charred, about 3-5 minutes per side.',
      'Arrange grilled vegetables on a large platter.',
      'Drizzle with any remaining marinade and garnish with fresh herbs.'
    ]
  },
  {
    id: '3',
    title: 'Chocolate Covered Strawberries',
    category: 'romantic',
    imageUrl: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?q=80&w=1288&auto=format&fit=crop',
    description: 'Simple yet elegant treat that symbolizes love and indulgence. Perfect for a romantic dessert.',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 2,
    ingredients: [
      '1 pound fresh strawberries with stems',
      '8 ounces semi-sweet chocolate chips',
      '2 tablespoons coconut oil',
      'Optional toppings: chopped nuts, shredded coconut, sprinkles'
    ],
    instructions: [
      'Wash strawberries and pat dry completely. Line a baking sheet with parchment paper.',
      'In a microwave-safe bowl, combine chocolate chips and coconut oil.',
      'Microwave in 30-second intervals, stirring between each, until completely melted and smooth.',
      'Hold strawberries by the stem and dip into the chocolate, twisting to coat.',
      'Allow excess chocolate to drip off, then place on parchment paper.',
      'Add optional toppings while chocolate is still wet.',
      'Refrigerate for at least 30 minutes until chocolate is set.',
      'Arrange on a beautiful plate and serve to your special someone.'
    ]
  },
  {
    id: '4',
    title: 'Mediterranean Quinoa Bowl',
    category: 'healthy',
    imageUrl: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=1770&auto=format&fit=crop',
    description: 'A nutritious and colorful bowl packed with Mediterranean flavors and plenty of protein.',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, finely diced',
      '1/2 cup kalamata olives, pitted and sliced',
      '1/2 cup crumbled feta cheese',
      '1/4 cup fresh parsley, chopped',
      '2 tablespoons olive oil',
      '1 tablespoon lemon juice',
      '1 teaspoon dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a medium saucepan, combine quinoa and vegetable broth. Bring to a boil.',
      'Reduce heat to low, cover, and simmer for 15-20 minutes until liquid is absorbed.',
      'Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork.',
      'In a large bowl, combine cooked quinoa, cucumber, tomatoes, red onion, and olives.',
      'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Pour dressing over the quinoa mixture and toss to combine.',
      'Gently fold in feta cheese and parsley.',
      'Serve at room temperature or chilled.'
    ]
  },
  {
    id: '5',
    title: 'Homemade Chicken Soup',
    category: 'comforting',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1771&auto=format&fit=crop',
    description: 'A classic homemade chicken soup that soothes the soul and warms you from within.',
    prepTime: '20 mins',
    cookTime: '1 hour',
    servings: 6,
    ingredients: [
      '1 whole chicken (about 4 pounds), cut into pieces',
      '3 carrots, chopped',
      '3 celery stalks, chopped',
      '1 large onion, diced',
      '4 cloves garlic, minced',
      '2 bay leaves',
      '1 teaspoon dried thyme',
      '8 cups chicken broth',
      '2 cups egg noodles',
      '1/4 cup fresh parsley, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large pot, add chicken pieces and cover with chicken broth.',
      'Bring to a boil, then reduce heat to maintain a simmer.',
      'Add carrots, celery, onion, garlic, bay leaves, and thyme.',
      'Simmer uncovered for about 45 minutes until chicken is tender and cooked through.',
      'Remove chicken from the pot and let cool slightly.',
      'Remove skin and bones, then shred the chicken meat.',
      'Return shredded chicken to the pot and bring soup back to a simmer.',
      'Add egg noodles and cook until tender, about 6-8 minutes.',
      'Stir in chopped parsley and season with salt and pepper.',
      'Remove bay leaves before serving.'
    ]
  },
  {
    id: '6',
    title: 'Berry Pavlova',
    category: 'party',
    imageUrl: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?q=80&w=1771&auto=format&fit=crop',
    description: 'An elegant dessert featuring crisp meringue, whipped cream, and fresh seasonal berries.',
    prepTime: '30 mins',
    cookTime: '1 hour 30 mins',
    servings: 8,
    ingredients: [
      '4 large egg whites, at room temperature',
      '1 cup granulated sugar',
      '1 teaspoon vanilla extract',
      '1 teaspoon white vinegar',
      '2 teaspoons cornstarch',
      '2 cups heavy cream',
      '3 tablespoons confectioners sugar',
      '2 cups mixed berries (strawberries, raspberries, blueberries)',
      'Mint leaves for garnish'
    ],
    instructions: [
      'Preheat oven to 275°F (135°C). Line a baking sheet with parchment paper.',
      'In a clean, dry bowl, beat egg whites until soft peaks form.',
      'Gradually add granulated sugar, 1 tablespoon at a time, while continuing to beat.',
      'Beat until stiff peaks form and mixture is glossy and sugar is dissolved.',
      'Fold in vanilla extract, vinegar, and cornstarch.',
      'Spoon mixture onto parchment paper and shape into a 9-inch circle, creating a slight depression in the center.',
      'Bake for 1 hour 15 minutes until crisp but still white.',
      'Turn off oven and leave meringue inside to cool completely with door slightly ajar.',
      'Whip heavy cream with confectioners sugar until soft peaks form.',
      'Spread whipped cream over cooled meringue and top with mixed berries.',
      'Garnish with mint leaves before serving.'
    ]
  },
  {
    id: '7',
    title: 'Seared Scallops with Risotto',
    category: 'romantic',
    imageUrl: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=1771&auto=format&fit=crop',
    description: 'Restaurant-quality seared scallops paired with creamy parmesan risotto. A perfect date night dinner.',
    prepTime: '15 mins',
    cookTime: '35 mins',
    servings: 2,
    ingredients: [
      '8 large sea scallops',
      '1 tablespoon olive oil',
      '2 tablespoons butter, divided',
      '1 shallot, finely chopped',
      '1 cup Arborio rice',
      '1/2 cup dry white wine',
      '4 cups warm chicken or vegetable broth',
      '1/2 cup grated Parmesan cheese',
      '2 tablespoons fresh parsley, chopped',
      'Salt and pepper to taste',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Pat scallops dry with paper towels and season with salt and pepper.',
      'For the risotto, melt 1 tablespoon butter in a saucepan over medium heat.',
      'Add shallot and cook until translucent, about 2-3 minutes.',
      'Add Arborio rice and stir for 1-2 minutes until lightly toasted.',
      'Pour in wine and stir until absorbed.',
      'Add warm broth, 1/2 cup at a time, stirring frequently and waiting until liquid is absorbed before adding more.',
      'Continue this process until rice is creamy and al dente, about 20-25 minutes.',
      'Stir in Parmesan cheese and remaining butter. Cover and keep warm.',
      'Heat olive oil in a skillet over high heat until very hot.',
      'Add scallops and sear for 1.5-2 minutes per side until golden brown and just opaque in center.',
      'Serve scallops over risotto, garnish with parsley, and serve with lemon wedges.'
    ]
  },
  {
    id: '8',
    title: 'Green Power Smoothie Bowl',
    category: 'healthy',
    imageUrl: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1713&auto=format&fit=crop',
    description: 'A nutritious smoothie bowl packed with greens, fruits, and superfoods for an energizing breakfast.',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 1,
    ingredients: [
      '2 cups fresh spinach',
      '1 ripe banana, frozen',
      '1/2 avocado',
      '1/2 cup frozen mango chunks',
      '1 tablespoon chia seeds',
      '1 cup almond milk',
      'Toppings: sliced banana, berries, granola, coconut flakes, hemp seeds'
    ],
    instructions: [
      'Place spinach, frozen banana, avocado, mango, chia seeds, and almond milk in a blender.',
      'Blend until smooth and creamy. Add more almond milk if needed to reach desired consistency.',
      'Pour into a bowl.',
      'Arrange toppings in an artistic pattern on top of the smoothie.',
      'Enjoy immediately with a spoon.'
    ]
  }
];
