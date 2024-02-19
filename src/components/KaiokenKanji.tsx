import { ElementProps } from "kaioken"

export function KaiokenKanji(props: ElementProps<"span">) {
  return (
    <span {...props}>
      <span className="t_nihongo_kanji" lang="ja">
        <ruby>
          界<rt>かい</rt>
        </ruby>
        <ruby>
          王<rt>おう</rt>
        </ruby>
        <ruby>
          拳<rt>けん</rt>
        </ruby>
      </span>
    </span>
  )
}
