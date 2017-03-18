import React from 'react'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import DefaultPage from './DefaultPage'

const content = markdown(markdownOptions)`
ECMAScript là tiêu chuẩn ngôn ngữ được sử dụng cho JavaScript. ECMAScript 6, hay ES6, ra mắt năm 2015 nên đôi khi cũng được gọi là ES2015. ES6 là một bước nhảy lớn của JavaScript kể từ khi bản nâng cấp cuối cùng ES5 được ra mắt vào năm 2009.

Có khá nhiều tính năng mới của ES6 đã được hỗ trợ trên các bộ dịch JavaScript hiện đại. Tuy nhiên, Babel sẽ giúp chúng ta sử dụng được nhiều tính năng mới hơn nữa, và khiến code có thể chạy được trên nhiều nền tảng hơn. React Native dùng Babel để kích hoạt các tính năng của ES6 cũng như đảm bảo độ ổn định của code, vì code của chúng ta sẽ được chạy trên nhiều nền tảng khác nhau: Android, iOS, Windows,...

# Những tính năng nổi bật của ES6

Hãy cùng điểm qua một số tính năng mới của ES6 mà chúng ta sẽ sử dụng, cũng như cách mà Babel chuyển hóa chúng. Phần này khá dài và khô khan nếu nếu bạn cảm thấy chán thì có thể học về [React Components](components) trước rồi quay lại học ngôn ngữ sau cũng được.
`

export default props => <DefaultPage 
    {...props}
    author='nguyenlevulong'
    authorURL='https://www.facebook.com/vu.long.355744'
>
    {content}
</DefaultPage>
