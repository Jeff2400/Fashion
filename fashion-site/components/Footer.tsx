// Footer: Social links and copyright
export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-8 px-6 text-center text-zinc-500 font-sans mt-20" style={{backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)'}}>
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="hover:text-black transition" aria-label="Instagram">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM19 7.5C19.2761 7.5 19.5 7.27614 19.5 7C19.5 6.72386 19.2761 6.5 19 6.5C18.7239 6.5 18.5 6.72386 18.5 7C18.5 7.27614 18.7239 7.5 19 7.5Z" fill="currentColor"/></svg>
        </a>
        <a href="#" className="hover:text-black transition" aria-label="Facebook">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H12V15H10V12H12V10C12 8.89543 12.8954 8 14 8H16V11H14V12H16V15H14V22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" fill="currentColor"/></svg>
        </a>
        <a href="#" className="hover:text-black transition" aria-label="WhatsApp">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2 22l4.99-1.36A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.963 7.963 0 0 1-4.29-1.26l-.3-.18-2.96.8.8-2.89-.19-.3A7.963 7.963 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.62.78-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.3.09-.4.09-.09.2-.23.3-.34.1-.11.13-.19.2-.32.07-.13.03-.25-.01-.35-.04-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.23-.18.18-.68.66-.68 1.6 0 .94.7 1.85.8 1.98.1.13 1.38 2.12 3.36 2.89.47.16.84.25 1.13.32.47.1.9.09 1.24.05.38-.05 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23Z" fill="currentColor"/></svg>
        </a>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Tailored Elegance. All rights reserved.</div>
    </footer>
  );
}
