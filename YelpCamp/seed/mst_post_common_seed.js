module.exports.formNote = {
  title: "フォームの注意事項",
  createDate: "2023-08-15 00:53",
  content: JSON.stringify([
    {
      type: "list",
      data: {
        style: "unordered",
        items: [
          "メールアドレスは半角英数字で入力し、送信前に誤りがないことをご確認ください。",
          "半角カナ入力は文字化けの原因となりますのでご注意ください。",
          "全角のダッシュ「―」波形「～」は文字化けの原因となりますのでご注意ください。",
          "ご記入いただいたアドレス宛に記入内容が自動返信されます。もしこちらが届かなかった場合はメールアドレスが間違っている可能性があるため、お電話にてお問い合わせください。",
        ],
      },
    },
  ]),
  type: 1,
};

module.exports.privacyPolicy = {
  title: "フォームの注意事項",
  createDate: "2023-08-26 12:45",
  content: JSON.stringify([
    {
      type: "paragraph",
      data: {
        text: "当サイトは、保護方針を定め、その履行に努めてまいります。",
      },
    },
    {
      type: "list",
      data: {
        style: "ordered",
        items: [
          "個人情報を集めるときには、お客様等に対し、利用する目的を明確にし、その目的以外にはその情報は使用いたしません。",
          "個人情報は漏えいを防止するため、安全に管理いたします。",
          "個人情報を利用する際は、利用目的の範囲内で適切に行い、法令で認められている場合を除いて、ご本人の同意を取らないで第三者に提供するようなことはいたしません。",
          "個人情報に関して本人から情報の開示、訂正、削除、利用停止等を求められたとき、速やかに対応いたします。また、個人情報を正確かつ最新の状態に保つよう努めます。",
          '当サイトは、Googleのアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスはトラフィックデータ収集のためCookieを使用し、データは匿名で収集されています。したがって個人を特定しておりません。その機能はCookieを無効にすると収集を拒否できます。お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<a href="https://www.google.com/analytics/terms/jp.html" rel="noopener" target="_blank">Google アナリティクス利用規約</a>からご覧ください。',
        ],
      },
    },
  ]),
  type: 2,
};

module.exports.comunicationMethod = {
  title: "",
  createDate: "2023-08-26 12:45",
  content: JSON.stringify([
    {
      type: "header",
      data: {
        text: "LINEでのご依頼・お見積り",
        withBacground: true,
        level: 4,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "こちらのQRコードを読み取るか、お友達登録ボタンをクリックして弊社公式LINEよりご連絡ください。",
      },
    },
    {
      type: "image",
      data: {
        caption: "",
        alt: "",
        file: {
          url: "ImgQRCode",
        },
      },
    },
  ]),
  type: 3,
};
