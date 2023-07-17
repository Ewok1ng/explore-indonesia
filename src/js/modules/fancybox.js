import { Fancybox } from '@fancyapps/ui';

export function fancybox() {
    Fancybox.bind('[data-fancybox="video-player"]', {});
    Fancybox.bind('[data-fancybox="photo-gallery"]', {});
}
