// Lightweight compatibility wrapper to use Next/Image in environments with typing issues
export default function NextImageCompat(props: any) {
  // Dynamically require the real Next/Image component to avoid TS type issues
  const Img: any = require('next/image').default;
  return <Img {...props} />;
}
