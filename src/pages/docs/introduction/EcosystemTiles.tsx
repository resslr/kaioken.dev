type EcosystemItemChild = {
  iconSrc?: string
  title: string
  url?: string
  comingSoon?: boolean
}

type EcosystemItem = {
  title: string
  description: string
  url: string
  subItems?: EcosystemItemChild[]
}

const ECOSYSTEM: EcosystemItem[] = [
  {
    title: "@kaioken-core",
    description:
      "The best source of custom hooks, headless components, and more.",
    url: "https://github.com/Yofou/kaioken-core",
    subItems: [
      {
        title: "Hooks",
        url: "https://hooks.kaioken-core.dev/",
        iconSrc: "https://hooks.kaioken-core.dev/kaioken-hook.svg",
      },
      {
        title: "Components",
        comingSoon: true,
      },
      {
        title: "Motion",
        comingSoon: true,
      },
      {
        title: "Sortable",
        comingSoon: true,
      },
    ],
  },
  {
    title: "Adonis Kaioken Template",
    description:
      "A ready-to-use starter template for Kaioken applications built with Adonis.",
    url: "https://github.com/Yofou/adonis-kaioken-template",
  },
  {
    title: "Inertia Kaioken Adapter",
    description:
      "Exactly what you need to use Kaioken as a front end for Inertia. Build apps with Laravel, .NET and more.",
    url: "https://github.com/CrimsonChi/inertia-kaioken-adapter",
  },
]

export function EcosystemTiles() {
  return (
    <div className="not-prose flex gap-4 flex-wrap">
      {ECOSYSTEM.map((item) => (
        <EcosystemTile key={item.title} {...item} />
      ))}
    </div>
  )
}

function EcosystemTile({
  title,
  description,
  url,
  subItems,
}: {
  title: string
  description: string
  url: string
  subItems?: EcosystemItemChild[]
}) {
  return (
    <div className="flex flex-col p-2 w-full flex-grow basis-1/2 lg:basis-1/3 relative before:bg-theme-gradient before:content-[''] before:absolute before:inset-0 before:opacity-75 before:z-[-1] before:rounded hover:before:opacity-100 before:transition-opacity text-center">
      <div className="bg-black bg-opacity-10 p-6 rounded flex flex-col gap-8 flex-grow">
        <a
          href={url}
          className="not-prose text-xl font-bold text-light"
          target="_blank"
        >
          {title}
        </a>
        <i className="text-sm text-light opacity-85">{description}</i>
        {subItems && (
          <div className="flex flex-wrap gap-4 justify-around">
            {subItems.map((item) => (
              <EcosystemTileChild key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function EcosystemTileChild({
  title,
  url,
  iconSrc,
  comingSoon,
}: EcosystemItemChild) {
  return (
    <a
      href={url}
      className={
        `inline-flex gap-4 items-center not-prose text-sm font-bold text-light` +
        (comingSoon ? " opacity-50" : "")
      }
      title={title + (comingSoon ? " - coming soon" : "")}
      target="_blank"
    >
      {iconSrc && <img src={iconSrc} className="w-6 h-6" alt={title} />}
      <span>{title}</span>
    </a>
  )
}
