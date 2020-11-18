import { useEffect, useState } from 'react'

export default function useWindowPosition(id) {

  const [animation, setAnimation] = useState(false);

  function updatePosition() {
    const elementHeight = window.document.getElementById(id).offsetHeight;
    if(window.pageYOffset > elementHeight * 0.7) {
      setAnimation(!animation);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);

  return animation;

}
