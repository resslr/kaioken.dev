import { createContext, useContext, useRef, useState } from "kaioken"

export type TutorialStep = {
  files: Record<string, string>
  solution?: Record<string, string>
  readonly?: boolean
}

type TutorialCtx = {
  setStep: (step: TutorialStep) => void
  step: Kaioken.MutableRefObject<TutorialStep | null>
}

export const TutorialFilesContext = createContext<TutorialCtx>(null as any)

export const TutorialStepProvider: Kaioken.FC = ({ children }) => {
  const step = useRef<TutorialStep | null>(null)
  const setStep = (newStep: TutorialStep) => {
    step.current = newStep
  }
  return (
    <TutorialFilesContext.Provider value={{ setStep, step }}>
      {children}
    </TutorialFilesContext.Provider>
  )
}

export function useTutorialStep(step: TutorialStep): null
export function useTutorialStep(): ReturnType<typeof useContext<TutorialCtx>>
export function useTutorialStep(step?: TutorialStep) {
  const ctx = useContext(TutorialFilesContext)
  if (step) {
    ctx.setStep(step)
    return null
  }
  return ctx
}
