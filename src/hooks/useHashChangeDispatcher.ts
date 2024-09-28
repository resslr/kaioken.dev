import { customEvents } from "$/custom-events"
import { useEffect, useRef, useState } from "kaioken"

// export const useSectionObserver = (sections: string[]) => {
//   const [currentSection, setCurrentSection] = useState<string>(sections[0])

//   useEffect(() => {
//     const sectionElements = sections.map((id) => document.getElementById(id))

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const hash = `#${entry.target.id}`
//             setCurrentSection(hash)
//             window.history.pushState(null, "", hash)

//             // Dispatch a hashchange event
//             window.dispatchEvent(new HashChangeEvent("hashchange"))
//           }
//         })
//       },
//       { threshold: 0.6 } // Adjust threshold to change visibility sensitivity
//     )

//     sectionElements.forEach((section) => {
//       if (section) {
//         observer.observe(section)
//       }
//     })

//     return () => {
//       observer.disconnect()
//     }
//   }, [sections])

//   return currentSection
// }

export const useHashChangeDispatcher = (sections: string[]) => {
  const currentSection = useRef<string>("")

  useEffect(() => {
    const handleScroll = () => {
      if (globalThis.window.scrollY < 50) {
        dispatchHashChange("", currentSection.current)
        currentSection.current = ""
      } else if (currentSection.current === "") {
        currentSection.current = sections[0]
        dispatchHashChange(currentSection.current, "")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  useEffect(() => {
    const sectionElements = sections.map((id) => document.getElementById(id))

    const observer = new IntersectionObserver(
      (entries) => {
        if (globalThis.window.scrollY < 50)
          return dispatchHashChange("", currentSection.current)
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i]
          if (!entry.isIntersecting && entries.length === 1) {
            // left a short section?
            const prev = currentSection.current
            const sectionIdx = sections.indexOf(entry.target.id)
            if (sectionIdx === 0) {
              currentSection.current = sections[1]
            } else if (sectionIdx === sections.length - 1) {
              currentSection.current = sections[sectionIdx - 1]
            }

            if (prev !== currentSection.current) {
              dispatchHashChange(currentSection.current, prev)
            }
            break
          }
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            dispatchHashChange(entry.target.id, currentSection.current)
            currentSection.current = entry.target.id
            break
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px",
      }
    )

    sectionElements.forEach((section) => {
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections, currentSection])
}

function dispatchHashChange(newId: string, prevId: string) {
  const hash = newId ? `#${newId}` : ""

  // Only update if the section is not already set as the current section
  if (prevId !== hash || window.location.hash !== hash) {
    //window.history.replaceState(null, "", hash)
    // Update the URL hash without reloading the page
    if (hash !== "") {
      window.history.pushState(null, "", hash)
    } else {
      window.history.pushState(null, "", window.location.href.split("#")[0])
    }
    window.dispatchEvent(new customEvents.scrollHashChangeEvent())
  }
}
