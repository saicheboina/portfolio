export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 dark:bg-card/50 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Sai Cheboina. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
