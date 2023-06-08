import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'kakarot-landing',
      region: 'eu-west-1',
      profile: 'kakarot-landing',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, 'site');
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
