module.exports = {
    inquiryItem: JSON.stringify({
        label: 'お問い合わせ項目',
        type: 'radio',
        required: false,
        options: [
          { value: '001', label: '無料お見積り依頼' },
          { value: '002', label: '無料相談' },
          { value: '003', label: 'お申し込み' },
          { value: '004', label: 'その他ご質問' },
        ],
      }),
      requestContent: JSON.stringify({
        label: '依頼内容',
        type: 'checkbox',
        required: false,
        options: [
          { value: '001', label: '粗大ゴミ' },
          { value: '002', label: '回収引っ越し' },
          { value: '003', label: 'ハウスクリーニング' },
          { value: '004', label: '遺品整理' },
          { value: '005', label: 'ゴミ屋敷' },
        ],
      }),
      name: JSON.stringify({
        label: 'お名前',
        required: true,
        type: 'text',
      }),
      furigana: JSON.stringify({
        label: 'ふりがな',
        required: false,
        type: 'text',
      }),
      emailAddress: JSON.stringify({
        label: 'メールアドレス',
        required: true,
        type: 'email',
      }),
      address: JSON.stringify({
        label: 'ご住所',
        required: false,
        type: 'text',
      }),
      telephoneNumber: JSON.stringify({
        label: '電話番号',
        required: true,
        type: 'text',
      }),
      preferredContact: JSON.stringify({
        label: 'ご希望の連絡方法',
        required: false,
        type: 'checkbox',
        options: [
          { value: '001', label: 'メール' },
          { value: '002', label: '電話' },
          { value: '', label: 'LINEの場合は上記QRコードまたはバナーよりご連絡ください。', ignoreInput: true },
        ],
      }),
      contentOfInquiry: JSON.stringify({
        label: 'ご希望の連絡方法',
        required: false,
        type: 'text-area',
      }),
}