/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const PageNumber = ({ number }: { number: number }) => (
  <div className="absolute bottom-6 left-0 right-0 text-center font-mono text-[10pt] text-smoke-grey pointer-events-none">
    — {number} —
  </div>
);

const DecorativeLine = ({ color = 'var(--color-fat-gold)' }) => (
  <svg width="100" height="2" viewBox="0 0 100 2" className="mx-auto my-4">
    <line x1="0" y1="1" x2="100" y2="1" stroke={color} strokeWidth="1" />
  </svg>
);

const CrossedCutlery = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto mb-4" fill="none" stroke="var(--color-bone-amber)" strokeWidth="1.5">
    <path d="M10 30L30 10M12 32L32 12M15 15C15 15 12 18 10 22C8 26 8 30 8 30H12C12 30 12 26 14 22C16 18 19 15 19 15L15 15Z" />
    <path d="M25 15C25 15 28 18 30 22C32 26 32 30 32 30H28C28 30 28 26 26 22C24 18 21 15 21 15L25 15Z" />
  </svg>
);

const FlameIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-meat-red)" strokeWidth="2" className="inline-block mr-2">
    <path d="M12 2C12 2 15 6 15 10C15 15 12 18 12 18C12 18 9 15 9 10C9 6 12 2 12 2Z" />
    <path d="M12 8C12 8 13.5 10 13.5 12C13.5 14.5 12 16 12 16C12 16 10.5 14.5 10.5 12C10.5 10 12 8 12 8Z" />
  </svg>
);

const RecipeCard = ({ number, title, ingredients, instructions }: { number: number, title: string, ingredients: string[], instructions: string }) => (
  <div className="recipe-card mb-8">
    <div className="corner-bracket corner-top-left"></div>
    <div className="corner-bracket corner-bottom-right"></div>
    
    <div className="flex justify-between items-start mb-4">
      <span className="font-mono text-bone-amber text-xs uppercase tracking-widest">{String(number).padStart(2, '0')}</span>
      <h3 className="font-serif italic text-2xl text-parchment flex-1 text-center">{title}</h3>
    </div>

    <div className="mb-6">
      <h4 className="font-mono text-fat-gold text-[9pt] tracking-[0.2em] mb-3 uppercase">Ingredients</h4>
      <ul className="space-y-1">
        {ingredients.map((item, idx) => (
          <li key={idx} className="font-body text-parchment text-[11pt] flex items-start">
            <span className="text-bone-amber mr-2">—</span> {item}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="font-mono text-fat-gold text-[9pt] tracking-[0.2em] mb-3 uppercase">Method</h4>
      <p className="font-body text-parchment text-[11pt] leading-relaxed">
        {instructions}
      </p>
    </div>
    
    <div className="mt-6 border-b border-meat-red opacity-30"></div>
  </div>
);

const Page = ({ children, number }: { children: React.ReactNode, number: number }) => (
  <div className="page-container relative shadow-2xl mb-8 print:shadow-none print:m-0">
    <div className="h-full flex flex-col">
      {children}
    </div>
    <PageNumber number={number} />
  </div>
);

const recipes = [
  {
    chapter: "BREAKFAST RECIPES",
    items: [
      { id: 1, title: "Crispy Beef & Jammy Eggs Bowl", ingredients: ["Ground beef", "3 eggs", "Salt"], instructions: "Crisp ground beef until edges brown. Top with soft-boiled jammy eggs." },
      { id: 2, title: "Butter-Scrambled Egg Clouds", ingredients: ["Eggs", "Butter", "Salt"], instructions: "Whisk eggs heavily, cook slowly in butter for fluffy texture." },
      { id: 3, title: "Steak & Egg Breakfast Stack", ingredients: ["Thin steak", "Eggs", "Butter"], instructions: "Layer sliced steak with fried eggs on top." },
      { id: 4, title: "Bacon Crisp Egg Cups", ingredients: ["Bacon", "Eggs"], instructions: "Bake bacon in muffin tray, crack egg into center, bake again." },
      { id: 5, title: "Carnivore Breakfast Hash", ingredients: ["Ground beef", "Eggs", "Butter"], instructions: "Brown beef, scramble eggs into it for a mixed texture bowl." },
    ]
  },
  {
    chapter: "COMFORT & BUDGET MEALS",
    items: [
      { id: 6, title: "Slow Butter Beef Bowl", ingredients: ["Chuck beef", "Butter", "Salt"], instructions: "Slow cook beef until tender, finish with butter." },
      { id: 7, title: "Crispy Ground Beef “Taco Bowl” (No Plants)", ingredients: ["Ground beef", "Salt"], instructions: "Cook until very crispy for texture contrast." },
      { id: 8, title: "Chicken Skin Crunch Plate", ingredients: ["Chicken thighs", "Salt"], instructions: "Cook until skin is extra crispy." },
      { id: 9, title: "Beef & Egg Comfort Bowl", ingredients: ["Ground beef", "Eggs", "Butter"], instructions: "Mix soft eggs into hot beef for creamy texture." },
      { id: 10, title: "Shredded Pork Fat Bowl", ingredients: ["Pork shoulder", "Salt"], instructions: "Slow cook, shred, and mix with cooking fat." },
    ]
  },
  {
    chapter: "CREATIVE HIGH-FAT MEALS",
    items: [
      { id: 11, title: "Ribeye Butter Melt Plate", ingredients: ["Ribeye", "Butter", "Salt"], instructions: "Sear steak, melt butter over slices while resting." },
      { id: 12, title: "Egg Yolk Fat Bomb Bowl", ingredients: ["Eggs", "Butter", "Ground beef"], instructions: "Mix raw yolks into hot beef (residual heat cooks gently)." },
      { id: 13, title: "Beef Short Rib Glaze Bowl", ingredients: ["Short ribs", "Salt"], instructions: "Slow cook until sticky-fat texture forms." },
      { id: 14, title: "Salmon Crisp Skin Plate", ingredients: ["Salmon", "Butter", "Salt"], instructions: "Pan-fry skin until crunchy." },
      { id: 15, title: "Carnivore “Steak Butter Soup”", ingredients: ["Steak pieces", "Butter", "Salt"], instructions: "Serve hot steak in melted butter broth style." },
    ]
  },
  {
    chapter: "FAST & FUN MEALS",
    items: [
      { id: 16, title: "Air Fryer Burger Stacks", ingredients: ["Ground beef", "Salt"], instructions: "Stack air-fried patties for layered texture." },
      { id: 17, title: "Leftover Meat Egg Stir", ingredients: ["Any leftover meat", "Eggs"], instructions: "Stir fry together for quick mix meal." },
      { id: 18, title: "Cold Carnivore Plate", ingredients: ["Cooked meat", "Eggs", "Butter"], instructions: "Serve chilled for no-cook option." },
      { id: 19, title: "Steak Bite Skillet", ingredients: ["Steak", "Butter", "Salt"], instructions: "Cut steak into cubes and sear quickly." },
      { id: 20, title: "Carnivore Snack Bowl Mix", ingredients: ["Eggs", "Ground beef", "Bacon"], instructions: "Combine small portions for grazing-style meal." },
    ]
  }
];

export default function App() {
  let globalPageCounter = 1;

  return (
    <div className="bg-neutral-900 py-12 min-h-screen print:p-0 print:bg-transparent overflow-x-hidden">
      {/* PAGE 1: COVER */}
      <Page number={globalPageCounter++}>
        <div className="flex-1 flex flex-col justify-center items-center text-center p-10 border-[1px] border-fat-gold/10 m-4">
          <DecorativeLine />
          <h1 className="font-serif font-black text-6xl text-parchment tracking-[0.15em] leading-tight mb-4 uppercase">
            Carnivore<br/>Cookbook
          </h1>
          <DecorativeLine />
          <p className="font-body italic text-bone-amber text-xl max-w-sm mt-8 leading-relaxed">
            20 Creative, High-Satisfaction Recipes for Sticking to the Diet
          </p>
          <div className="mt-auto">
            <CrossedCutlery />
          </div>
        </div>
      </Page>

      {/* PAGE 2: INTRO & PRINCIPLES */}
      <Page number={globalPageCounter++}>
        <div className="p-4">
          <h2 className="font-serif font-bold text-4xl text-fat-gold mb-10 border-b border-bone-amber/20 pb-4 tracking-tight">Introduction</h2>
          <div className="font-body text-parchment space-y-6 text-lg leading-loose italic max-w-prose">
            <p>The carnivore diet is often described as simple.</p>
            <p>But simplicity can become repetitive fast.</p>
            <p>And repetition is usually where most people fall off.</p>
            <p>This cookbook takes a different approach. Instead of focusing only on basics, it introduces <strong className="text-fat-gold not-italic">creative, satisfying carnivore meals</strong> designed to make the diet more enjoyable and easier to stick to long term.</p>
            <p>Same ingredients. New experience.<br/>That is the goal.</p>
          </div>

          <div className="mt-20">
            <h2 className="font-serif font-bold text-3xl text-fat-gold mb-8 italic">Core Principles</h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                "Variety helps adherence, not perfection",
                "Texture and cooking method matter as much as ingredients",
                "Fat is essential for satisfaction",
                "Simple ingredients can still feel different with small changes"
              ].map((text, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-bone-amber text-bg flex items-center justify-center font-mono font-bold mr-4 shrink-0 shadow-lg">
                    {i + 1}
                  </div>
                  <p className="font-body text-parchment text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 3: TOC */}
      <Page number={globalPageCounter++}>
        <div className="p-4">
          <h2 className="font-serif font-bold text-4xl text-bone-amber mb-12 border-b border-bone-amber/20 pb-4">Table of Contents</h2>
          <div className="space-y-6">
            {[
              { label: "Introduction", page: 2 },
              { label: "Core Principles", page: 2 },
              { label: "Breakfast Recipes (1–5)", page: 4 },
              { label: "Comfort & Budget Meals (6–10)", page: 7 },
              { label: "Creative High-Fat Meals (11–15)", page: 10 },
              { label: "Fast & Fun Meals (16–20)", page: 13 },
              { label: "Meal Structuring Guide", page: 16 },
              { label: "Grocery List", page: 17 },
              { label: "Final Thoughts", page: 18 }
            ].map((entry, idx) => (
              <div key={idx} className="flex items-baseline justify-between group cursor-default">
                <span className="font-serif text-2xl text-parchment group-hover:text-fat-gold transition-colors">{entry.label}</span>
                <div className="flex-1 border-b border-smoke-grey/30 border-dotted mx-4 mb-2"></div>
                <span className="font-mono text-smoke-grey text-lg italic">{entry.page}</span>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* RECIPE CHAPTERS */}
      {recipes.map((chapter, chapterIdx) => {
        const chapterNumber = chapterIdx + 1;
        const result = [];
        
        // Chapter Opener
        result.push(
          <Page key={`opener-${chapterIdx}`} number={globalPageCounter++}>
            <div className="flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden bg-bg">
              <span className="absolute font-serif text-[18rem] text-meat-red/10 leading-none select-none pointer-events-none transform -translate-y-8">
                {chapterNumber}
              </span>
              <div className="relative z-10 flex flex-col items-center">
                <FlameIcon />
                <h2 className="font-serif font-bold text-5xl text-parchment uppercase tracking-widest mt-4 max-w-md leading-tight">
                  {chapter.chapter}
                </h2>
                <div className="w-16 h-1 bg-meat-red mt-6"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 L50 20 L100 100 Z" fill="var(--color-meat-red)" />
                </svg>
              </div>
            </div>
          </Page>
        );

        // Recipe Pages (2 per page)
        for (let i = 0; i < chapter.items.length; i += 2) {
          const items = chapter.items.slice(i, i + 2);
          result.push(
            <Page key={`recipes-${chapterIdx}-${i}`} number={globalPageCounter++}>
              <div className="flex flex-col h-full py-4">
                {items.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id}
                    number={recipe.id}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                  />
                ))}
              </div>
            </Page>
          );
        }
        
        return result;
      })}

      {/* MEAL STRUCTURING GUIDE */}
      <Page number={globalPageCounter++}>
        <div className="p-4 h-full flex flex-col">
          <h2 className="font-serif font-bold text-4xl text-fat-gold mb-8 border-b-2 border-meat-red/30 pb-4">Meal Structuring Guide</h2>
          <p className="font-body italic text-parchment text-lg mb-10 leading-relaxed">
            A simple structure to maintain focus and maximize results:
          </p>
          
          <div className="grid grid-cols-1 gap-6 flex-1">
            {[
              { label: "Breakfast", color: "var(--color-bone-amber)", text: "Eggs + Meat" },
              { label: "Midday", color: "var(--color-fat-gold)", text: "Beef or Pork Bowl" },
              { label: "Evening", color: "var(--color-meat-red)", text: "High-Fat Meat Meal" }
            ].map((section, idx) => (
              <div key={idx} className="bg-bg-card p-8 border border-white/5 relative">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: section.color }}></div>
                <h3 className="font-mono text-xl tracking-widest text-parchment uppercase mb-4" style={{ color: section.color }}>
                  {section.label}
                </h3>
                <p className="font-body text-2xl text-parchment italic">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 border-l-4 border-smoke-grey bg-smoke-grey/10 italic font-body text-parchment text-lg">
            "Rotate textures instead of ingredients to avoid boredom. A crispy sear feels entirely different from a slow braise."
          </div>
        </div>
      </Page>

      {/* GROCERY LIST */}
      <Page number={globalPageCounter++}>
        <div className="p-4">
          <h2 className="font-serif font-bold text-4xl text-bone-amber mb-12 border-b border-bone-amber/20 pb-4 uppercase tracking-tighter">Grocery List</h2>
          <div className="grid grid-cols-2 gap-12">
            {[
              { category: "Beef", items: ["Ground beef", "Ribeye", "Chuck", "Short ribs"] },
              { category: "Pork", items: ["Bacon", "Pork shoulder"] },
              { category: "Poultry", items: ["Chicken thighs", "Eggs"] },
              { category: "Fish", items: ["Salmon"] },
              { category: "Fats", items: ["Butter"] }
            ].map((group, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-serif text-2xl text-fat-gold italic mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="font-body text-parchment flex items-center text-lg">
                      <span className="text-bone-amber mr-2 font-bold">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* FINAL THOUGHTS */}
      <Page number={globalPageCounter++}>
        <div className="p-4 h-full flex flex-col justify-center text-center">
          <span className="font-serif text-8xl text-meat-red/30 italic leading-none block mb-[-2rem]">“</span>
          <h2 className="font-serif font-bold text-4xl text-parchment mb-12 italic leading-tight">Final Thoughts</h2>
          
          <div className="font-body text-parchment text-xl space-y-6 leading-loose max-w-md mx-auto">
            <p>Sticking to carnivore is not about discipline alone.</p>
            <p className="text-fat-gold">It is about making the diet interesting enough to repeat.</p>
            <p>Small changes in texture, cooking style, and presentation make consistency much easier.</p>
          </div>
          
          <div className="mt-20 pt-10 border-t border-meat-red/20">
            <h3 className="font-mono text-fat-gold text-sm tracking-[0.3em] mb-4 uppercase">Closing Note</h3>
            <p className="font-body italic text-parchment text-lg max-w-sm mx-auto opacity-80">
              If you want, this cookbook can be expanded into a full structured meal system with weekly rotation plans, portion guidance, and fat optimization strategies designed for long-term adherence.
            </p>
          </div>
          <span className="font-serif text-8xl text-meat-red/30 italic leading-none block mt-[-2rem]">”</span>
        </div>
      </Page>
    </div>
  );
}
