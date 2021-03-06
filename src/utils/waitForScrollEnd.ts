const waitForScrollEnd = () => {
  let last_changed_frame = 0;
  let last_x = window.scrollX;
  let last_y = window.scrollY;

  return new Promise<void>((resolve) => {
    function tick(frames: number) {
      // We requestAnimationFrame either for 500 frames or until 20 frames with
      // no change have been observed.
      if (frames >= 10 || frames - last_changed_frame > 50) {
        resolve();
        // console.log("scroll end");
      } else {
        if (window.scrollX != last_x || window.scrollY != last_y) {
          last_changed_frame = frames;
          last_x = window.scrollX;
          last_y = window.scrollY;
        }
        requestAnimationFrame(tick.bind(null, frames + 1));
      }
    }
    tick(0);
  });
};

export default waitForScrollEnd;
