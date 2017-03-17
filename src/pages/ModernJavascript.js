import React, { Component } from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
Ngày trước, bạn chỉ việc gắn thẻ \`${'<script>'}\` vào đầu trang web là code JavaScript có thể chạy bình thường. Tuy nhiên, bây giờ chúng ta cần phải *tiền xử lí* code JavaScript thì mới có thể sử dụng được những tính năng mới cũng như bản mở rộng như JSX.

# Babel

Babel chính là công cụ giúp chúng ta tiền xử lí JavaScript. Babel là một máy dịch có khả năng tùy biến cao, hoạt động bằng cách chuyển hóa code JavaScript "hiện đại" thành những dòng code cổ điển tương thích với nhiều môi trường hơn. Dĩ nhiên nếu môi trường không hỗ trợ tính năng mới của ES6 như \`Map()\` thì Babel cũng bó tay, nhưng thay vào đó Babel có thể cung cấp những API còn thiếu bằng cách [polyfill](https://en.wikipedia.org/wiki/Polyfill).

Nếu bạn muốn tìm hiểu Babel dịch code như thế nào thì hãy sử dụng [Babel REPL](https://babeljs.io/repl/). Như bạn có thể thấy, code JavaScript mà Babel dịch ra khá là... xấu xí và khó hiểu. Vì vậy, Babel cho phép bạn debug ngay trên code gốc của mình bằng cách thêm **source maps** vào code được dịch. Trình thông dịch JavaScript sẽ chạy code đã được dịch, cùng lúc đó ánh xạ với vị trí tương ứng trên code gốc của bạn trong trình debugger, giúp bạn có một trải nghiệm debug dễ thở hơn.

# Cấu hình Babel

Bạn có thể cấu hình Babel bằng cách thêm file \`.babelrc\` vào thư mục root của project. File này cấu hình những tính năng mới nào của JavaScript và những plugin nào (JSX, JSX, JSX) mà bạn muốn sử dụng.

React Native đã cấu hình Babel sẵn cho bạn nên bạn sẽ không cần phải tạo file \`.babelrc\`. Tuy nhiên, nếu bạn muốn chỉnh sửa cấu hình mặc định, bạn hãy cài [babel-preset-react-native](https://github.com/facebook/react-native/tree/master/babel-preset) làm cấu hình gốc, từ đó mở rộng theo nhu cầu cá nhân.
`

export default props => <DefaultPage 
    {...props}
    author='nguyenlevulong'
    authorURL='https://www.facebook.com/vu.long.355744'
>
    {content}
</DefaultPage>
