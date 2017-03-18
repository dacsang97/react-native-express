import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'
import { EditorTranspiler } from '../components'

const code = `const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`

const content = markdown(markdownOptions)`
Thay vì dùng \`var\` để khai báo biến cục bộ, chúng ta sẽ sử dụng \`const\` và \`let\`. Sự khác biệt đó là \`var\` có phạm vi cục bộ trong toàn hàm, còn \`const\` và \`let\` có phạm vi cục bộ trong khối lệnh.

Ngoài ra, biến khai báo với \`const\` chỉ có thể được gán giá trị một lần. Việc gán một giá trị khác vào tên biến đó sẽ gây ra lỗi. Chú ý rằng nếu giá trị được gán cho biến \`const\` là một object hoặc array thì object hoặc array đó vẫn có thể được chỉnh sửa. Nói cách khác, chỉ có tên biến là bị trói buộc lại, còn các phần tử trong nó vẫn có thể được thay đổi.

<EditorTranspiler
  code=${code}
  title=${'Using const and let'}
/>

Ta thấy rằng code đầu ra đã thay thế \`const\` và \`let\` với \`var\`. Ngoài ra ta còn thấy Babel đã biến đổi \`const a = 3\` thành \`var _a = 3\`. Thật vậy, chính Babel là thứ ràng buộc phạm vi cục bộ của biến cũng như tính bất biến chứ không phải là trình chạy JavaScript.
`

export default props => <DefaultPage 
    {...props}
    author='nguyenlevulong'
    authorURL='https://www.facebook.com/vu.long.355744'
>
    {content}
</DefaultPage>
