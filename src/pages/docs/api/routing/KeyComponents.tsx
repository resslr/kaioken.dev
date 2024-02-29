import { CodePreview } from "$/components/CodePreview"
import { linkTypePreview } from "$/components/previews/link.type.preview"
import { routeTypePreview } from "$/components/previews/route.type.preview"
import { routerTypePreview } from "$/components/previews/router.type.preview"
import { navigateTypePreview } from "$/components/previews/navigate.type.preview"

export function RoutingKeyComponents() {
  return (
    <div>
      <ol>
        <li>
          <CodePreview data={routerTypePreview} />
          <ul>
            <li>
              Renders a single child component based on the current URL path.
            </li>
            <li>Manages navigation history and URL updates.</li>
            <li>
              Properties:
              <ul>
                <li>
                  <b>basePath</b> (optional): A prefix for path matching, useful
                  when the application is deployed in a subdirectory.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <CodePreview data={routeTypePreview} />
          <ul>
            <li>
              Defines a path pattern and the associated component to render when
              the path matches.
            </li>
            <li>
              Properties:
              <ul>
                <li>
                  <b>element</b>: A function that returns the component to be
                  rendered, accepting params and query objects.
                </li>
                <li>
                  <b>path</b>: A string representing the path pattern to match.
                </li>
                <li>
                  <b>fallthrough</b> (optional): A boolean indicating whether to
                  match loosely, allowing nested routers.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <CodePreview data={linkTypePreview} />
          <ul>
            <li>
              An anchor tag that handles client-side navigation without full
              page reloads.
            </li>
            <li>
              Maintains crawlability by providing a valid href attribute for
              search engines.
            </li>
            <li>
              Properties:
              <ul>
                <li>
                  <b>to</b>: The destination URL for navigation.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <CodePreview data={navigateTypePreview} />
          <ul>
            <li>A function for programmatic navigation to a given URL.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}
