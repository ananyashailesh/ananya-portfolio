import iphone11 from '~/assets/iphone-11.glb';
import macbookPro from '~/assets/macbook-pro.glb';
import canaanDog from '~/assets/canaan-dog.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
};

// Standalone (non-device) models — no screen texture, own baked material
export const standaloneModels = {
  canaanDog: {
    url: canaanDog,
    position: { x: 0, y: -1, z: 0 },
    animation: ModelAnimationType.SpringUp,
    tintMaterial: false,
  },
};
