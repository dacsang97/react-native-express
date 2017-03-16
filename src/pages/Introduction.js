import React, { Component } from 'react'
import { Link } from 'react-router'
import markdown from 'markdown-in-js'

import markdownOptions from '../utils/MarkdownOptions'
import Page from './Page'
import styles from '../styles'
import { WebPlayer, GithubCorner, PageHeader } from '../components'

const code = `/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Project', () => Project);`

const buttonStyle = {
  padding: '10px 15px',
  color: 'white',
  borderRadius: 3,
  backgroundColor: 'rgb(54,203,170)',
  textAlign: 'center',
  display: 'block',
  marginTop: 40,
}

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
React Native là một framework giúp xây dựng ứng dụng đa nền tảng.

Làm việc với React Native thì sướng khỏi nói, nhưng bước đầu làm quen có thể khiến bạn gặp khá nhiều trở ngại. Bạn nên đọc guide này song song với [docs chính thức](https://facebook.github.io/react-native/docs/getting-started.html) của Facebook. Docs của Facebook mặc định coi như bạn đã có kiến thức nền tảng về thư viện React trên web. Tuy nhiên guide của bọn mình sẽ cố gắng giải thích những khái niệm căn bản nhất, từ chính bản thân ngôn ngữ JavaScript đến những chủ đề mở rộng như Redux, GraphQL,... Trong quá trình học, bạn có thể nghịch code trực tiếp trên đây và kết quả sẽ được hiển thị theo thời gian thực.

Bọn mình hy vọng guide sẽ dễ dàng giúp bạn làm quen với React Native - một công nghệ vô cùng mới và hot hiện nay. Bản gốc tiếng Anh được viết bởi [@devinaabbott](https://twitter.com/devinaabbott) cùng một số tác giả khác và được chuyển ngữ sang tiếng Việt bởi [VTeam](https://www.facebook.com/vteamglobal/). Bạn nên theo dõi fanpage và [blog](https://blog.vteam.info/) của bọn mình để nhận được những bài hướng dẫn nóng hổi nhất đến từ những thành viên tâm huyết của VTeam.

# Hello World

Một app React Native về cơ bản sẽ giống như thế này:

<WebPlayer code={code} />

Bạn có thể thấy code JavaScript trong đây có gì đó khác khác so với JavaScript mà bạn từng được học. Đó là bởi vì chúng ta sẽ sử dụng những tính năng mới nhất của JavaScript (import, class, khai báo let/const, hàm async,...) và một ngôn ngữ mở rộng của JavaScript mang tên JSX.

Trong phần tiếp theo, mình sẽ giới thiệu sơ lược về mỗi chủ đề trên. Nếu bạn biết rồi thì hãy nhảy đến chương [Components](components) để học về React Component và vòng đời của mỗi Component. Có thể bạn đã quen thuộc với React rồi thì hãy nhảy đến chương [Những Component cốt yếu của React Native](core_components).
`

    return (
      <Page
        footer={this.props.footer}
        title={'React Native Express'}
        subtitle={'Học React Native, framework xây dựng ứng dụng đa nền tảng'}
        logo={'//cdn.rawgit.com/dabbott/react-native-express/master/static/logo'}
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
        shouldUpdatePageTitle={false}
      >
        <GithubCorner />
        <PageHeader
          title={'Cùng học React Native'}
          author={'@nguyenlevulong'}
          authorURL={'https://www.facebook.com/vu.long.355744'}
        />
        {content}
        <Link to={'modern_javascript'} style={buttonStyle}>
          Cùng bắt đầu nào!
        </Link>
      </Page>
    )
  }
}
