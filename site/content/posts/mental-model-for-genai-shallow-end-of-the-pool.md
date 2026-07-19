---
title: "Mental Model for GenAI: Shallow end of the pool"
date: 2023-10-02
draft: false
tags: ["ai", "education", "mental-models"]
image: "/images/posts/shallow-end-pool.png"
description: "A useful mental model for understanding GenAI prompts: think of it as a pool with a shallow end and a deep end."
readTime: "5 min read"
---

A mental model is one of those terms I'm not sure I hear too often in EDU context, but I hear it often in the engineering podcasts I listen to, and it's one of those power concepts worth adopting.

When we're working with complex software, we form visualizations that allow us to navigate certain features. To take a familiar example, when you use spreadsheet software, you'll have a mental model of how all the cells are recalculated when one cell changes. Do you visualize it as a domino effect, where one changed value causes the next cell to change? Or maybe you think of it as a broadcast system, where cells are telling each other "hey, I've changed, you need to recalculate too."

A good mental model has at least two of the following characteristics:

- Understandable to the mind
- Representative of the tool

Notice that I am not identifying a main characteristic that the mental model be accurate. The goal of a mental model is to enable the operator to understand complexity, not to describe how it actually works. The way it actually works it is itself often complex anyway, and the point is to simplify it.

The mental model for GenAI that I have found effective is to think of it as a pool with a shallow end and a deep end. The shallow end is where boundaries are clear, the bottom can be seen, and one can stand up in it. The deep end is where swimming is necessary.

When GenAI is asked questions, the prompt itself either takes the machine into the deep end, where it has far more to navigate, or the shallow end where it is much more effective.

Examples of prompts where boundaries are well formed are ones that contain solvable problems. In an EDU context, asking it to check for grammar is a solvable problem, for the "grammar" itself has a boundary that is well defined already. Note that shallow prompts can also be very complex, what really matters is if there are boundaries. A timetable is complex, as all schedulers know, but the rules are well established, so "help me to build a timetable" is a shallow-end prompt.

Examples of prompts in the deep end are ones that require creativity, or balancing of trade-offs, or professional judgment. For example, "help me build a unit plan" is not solvable because there aren't established boundaries that describe a unit plan fully. It's even weird to think of a unit plan as "solved." However, there are lots of examples of curriculum documents, and so GenAI will be able to produce output, but will have to do so in the deep end.

Where this mental model is useful is understanding that when thrown into the deep end, it responds by bringing the problem back to the shallow end. It has to pick and choose some boundaries that perhaps the prompt does not contain in order to navigate what has been requested of it.

Since a machine has to establish boundaries, it does so even when the prompt it requires diving into the depths of uncertainty. For example, it responds to "tell me a story" by having to decide on which genre of story, the main characters etc. If the prompt itself however has the boundaries already established, it will just take that and run with it.

This isn't how it actually works, however, but it doesn't matter. In the case of a spreadsheet, the way recalculation works is through a dependency graph. Knowing that would help us if we wanted to make a spreadsheet, but it would probably get in the way of using a spreadsheet to balance a budget.

In this way, the mental model of GenAI as navigating the deep end of the pool by navigating itself back towards the shallow end helps us answer a core issue when using the tool:

**Is the prompt I have in mind a good one?**
