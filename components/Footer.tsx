type FooterProps = {
  text: string;
};

export function Footer({ text }: FooterProps) {
  return <footer>{text}</footer>;
}
