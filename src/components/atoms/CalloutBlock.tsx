export function CalloutBlock({ children }: { children: JSX.Children }) {
  return (
    <div style="background-color: #1f1f1f; padding: 0.5rem 1rem; border-radius: 0.25rem; border-left: 0.25rem solid #b42641; color: #ddd;">
      {children}
    </div>
  )
}
