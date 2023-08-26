module.exports = {
    title: 'お問い合わせはこちら',
  createDate: '2023-08-15 00:53',
  list: JSON.stringify({
    style: 'unordered',
    items: [
      '必要事項をご記入いただき、[確認]ボタンをクリックしてください。',
      '送信内容を確認し［送信］ボタンをクリックでお問い合わせ完了となります。',
      '下記フォームからのお問い合わせ内容につきましては、内容を確認次第ご返答いたします。',
    ],
  }),
  block: JSON.stringify([
    {
      type: 'paragraph',
      data: {
        text: 'お急ぎの方は、お電話にてご連絡ください。',
      },
    },
    {
      type: 'image',
      data: {
        file: {
          url: "ImgContact",
        },
        caption: '',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'お電話に出られない場合がございますが、確認次第すぐこちらから折り返しいたします。\n担当者不在の場合や内容により、すぐにご回答が難しいこともございます。ご了承ください。',
      },
    },
  ]),
}