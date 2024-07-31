import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
      <script 
        src="https://giscus.app/client.js"
        data-repo="ETong020/ETongsland"
        data-repo-id="R_kgDOMPy-Bg"
        data-category="Announcements"
        data-category-id="DIC_kwDOMPy-Bs4ChRf2"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="noborder_light"
        ata-lang="zh-CN"
        crossorigin="anonymous"
        async>
      </script>
    )
  }

  return Footer
}) satisfies QuartzComponentConstructor
