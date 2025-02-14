import commandFactory from '@/factory/command';
import { componentNames, commandNames } from '@/consts';

const { IMAGE_LOADER } = componentNames;

const command = {
  name: commandNames.LOAD_IMAGE,

  /**
   * Load a background (main) image
   * @param {Graphics} graphics - Graphics instance
   * @param {string} imageName - Image name
   * @param {string} imgUrl - Image Url
   * @returns {Promise}
   */
  execute(graphics, imageName, imgUrl, trig) {
    const loader = graphics.getComponent(IMAGE_LOADER);
    const prevImage = loader.getCanvasImage();
    const prevImageWidth = prevImage ? prevImage.width : 0;
    const prevImageHeight = prevImage ? prevImage.height : 0;
    let objects;

    // console.log(trig);
    // console.trace();

    if (trig === 'btn') {
      objects = graphics.removeAll(true).filter((objectItem) => objectItem.type !== 'cropzone');
    } else {
      objects = graphics.removeAll(false).filter((objectItem) => objectItem.type !== 'cropzone');
    }

    // console.trace();

    objects.forEach((objectItem) => {
      objectItem.evented = true;
    });

    this.undoData = {
      name: loader.getImageName(),
      image: prevImage,
      objects,
    };

    return loader.load(imageName, imgUrl).then((newImage) => ({
      oldWidth: prevImageWidth,
      oldHeight: prevImageHeight,
      newWidth: newImage.width,
      newHeight: newImage.height,
    }));
  },

  /**
   * @param {Graphics} graphics - Graphics instance
   * @returns {Promise}
   */
  undo(graphics) {
    const loader = graphics.getComponent(IMAGE_LOADER);
    const { objects, name, image } = this.undoData;

    graphics.removeAll(true);
    graphics.add(objects);

    return loader.load(name, image);
  },
};

commandFactory.register(command);

export default command;
