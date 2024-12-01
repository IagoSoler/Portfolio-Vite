export const scrollToSection = (sectionId, offset = 0) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const position =
      element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: position, behavior: "smooth" });
  }
};
export const handleScroll = (setActiveSection) => {
  return () => {
    const sections = [
      "about",
      "career",
      "skills",
      "description",
      "projects",
      "contact",
    ];
    let current = "";

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section;
        }
      }
    }

    setActiveSection(current);
  };
};
export const handleFirstScroll = (
  setIsVisible,
  offset 
) => {
    setTimeout(() => {
      scrollToSection("about", offset);
    }, 100);
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
};

export const resetToHeader = (setAreVisible)=>{
  setAreVisible({
    header:true,
    about:false,
    career:false,
    skills:false,
    description:false,
    projects:false
  });
setTimeout(() => {
  scrollToSection('header',0)
}, 10);
}