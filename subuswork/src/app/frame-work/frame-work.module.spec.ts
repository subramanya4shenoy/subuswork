import { FrameWorkModule } from './frame-work.module';

describe('FrameWorkModule', () => {
  let frameWorkModule: FrameWorkModule;

  beforeEach(() => {
    frameWorkModule = new FrameWorkModule();
  });

  it('should create an instance', () => {
    expect(frameWorkModule).toBeTruthy();
  });
});
