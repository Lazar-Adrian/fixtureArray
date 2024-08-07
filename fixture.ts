import { test as base, BrowserContext, Page } from "@playwright/test";

export interface TestInitData extends CommonProp {
  testPage: Page;
}

interface Param1 {
  par1: number;
  par2: Param1Par2;
}

interface Param1Par2 {
  spar1: boolean;
  spar2: number;
}

interface Param2 {
  p1: boolean;
  p2: boolean;
  p3: string;
}

interface Param3 {
  a: SParam31;
  b: SParam32[];
  c: string;
}

interface SParam31 {
  spar31?: boolean;
  spar32?: S2Par1;
}

interface S2Par1 {
  s2par1: number;
  s2par2: string;
}

interface SParam32 {
  spar321?: string;
  spar322?: S3Par1;
}

interface S3Par1 {
  s3par1: number;
  s3par2: string;
}

export interface CommonProp {
  param1?: Param1[];
  param2?: Param2[];
  param3?: {
    a: { spar31?: boolean; spar32?: { s2par1: number; s2par2: string } };
    b: { spar321?: string; spar322?: { s3par1: number; s3par2: string } };
    c: string;
  }[];
}

interface PageNetworkSetupParams extends CommonProp {
  context: BrowserContext;
}


const testFixture = base.extend<TestInitData>({
  param1: [],
  param2: [],
  param3: [
    {
      a: {},
      b: {},
      c: "bliajdoajdpadjk;dak",
    },
  ],
  testPage: async (
    {
      context,
      param1,
      param2,
      param3
    },
    run
  ) => {
    const testSetupReturn = await testSetup({
      context,
      param1,
      param2,
      param3
    });
    await run(testSetupReturn);
  },
});

async function testSetup(params: PageNetworkSetupParams): Promise<Page> {
    const page = await params.context.newPage();
    console.log(params.param3);
    return page;
}

export const test = testFixture;
