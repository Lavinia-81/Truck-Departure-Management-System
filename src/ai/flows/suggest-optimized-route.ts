'use server';

/**
 * @fileOverview A route optimization AI agent.
 *
 * - suggestOptimizedRoute - A function that handles the route optimization process.
 * - SuggestOptimizedRouteInput - The input type for the suggestOptimizedRoute function.
 * - SuggestOptimizedRouteOutput - The return type for the suggestOptimizedRoute function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestOptimizedRouteInputSchema = z.object({
  destination: z.string().describe('The final destination of the route.'),
  via: z.string().optional().describe('The first stop on the route, if applicable.'),
  currentLocation: z.string().describe('The current location of the truck.'),
  trafficData: z.string().optional().describe('Real-time traffic data, if available.'),
});
export type SuggestOptimizedRouteInput = z.infer<
  typeof SuggestOptimizedRouteInputSchema
>;

const SuggestOptimizedRouteOutputSchema = z.object({
  optimizedRoute: z.string().describe('The suggested optimized route.'),
  estimatedTime: z.string().describe('The estimated time of arrival for the optimized route.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the suggested route optimization.'),
});
export type SuggestOptimizedRouteOutput = z.infer<
  typeof SuggestOptimizedRouteOutputSchema
>;

export async function suggestOptimizedRoute(
  input: SuggestOptimizedRouteInput
): Promise<SuggestOptimizedRouteOutput> {
  return suggestOptimizedRouteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestOptimizedRoutePrompt',
  input: {schema: SuggestOptimizedRouteInputSchema},
  output: {schema: SuggestOptimizedRouteOutputSchema},
  prompt: `You are an AI-powered route optimization expert. Given the destination, via points (if any), current location, and real-time traffic data (if any), you will suggest an optimized route and provide an estimated time of arrival.  Explain your reasoning for the suggested route.

Destination: {{{destination}}}
Via (First Stop): {{{via}}}
Current Location: {{{currentLocation}}}
Traffic Data: {{{trafficData}}}

Optimize the route to reduce delays and improve efficiency.
`,
});

const suggestOptimizedRouteFlow = ai.defineFlow(
  {
    name: 'suggestOptimizedRouteFlow',
    inputSchema: SuggestOptimizedRouteInputSchema,
    outputSchema: SuggestOptimizedRouteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
