
export default function getFirstImage(post) {
  const regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  const defaultImg = 'https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-autumnal-fall-big-tree-park-background-cartoon-design-backgroundfallbig-treefallen-leavespark-image_53954.jpg';
  if (post) {
    const src = regex.exec(post.contentHtml());
    if (src) {
      if (src[1].includes('imgur')) {
        let address_prefix = src[1].substring(0, src[1].lastIndexOf("."));
        let address_sufix = src[1].substring(src[1].lastIndexOf("."));
        return address_prefix + 'm' + address_sufix;
      }
      else {
        return src[1];
      }
    }
    else {
      return defaultImg;
    }
  }
  return defaultImg;
};
