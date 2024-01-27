export function getMediaType(item: string) {
  const extension = item.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "mp4":
    case "webm":
    case "mov":
    case "ogg":
      return "video";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      return "image";
    default:
      return "unknown";
  }
}
