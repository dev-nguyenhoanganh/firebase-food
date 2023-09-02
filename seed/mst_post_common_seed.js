module.exports.notFound = {
    title: "お探しのページは見つかりませんでした",
    createDate: "",
    content: JSON.stringify([
        {
            type: "paragraph",
            data: {
                text: "お探しのページは見つかりませんでした。<br/>お探しのページは削除されたか、URLが変更された可能性がございます。",
            },
        },
    ]),
    type: 0
};

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

module.exports.communicationMethod = {
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

module.exports.homePage = {
    title: "不用品・粗大ゴミの回収ならおたすけクリーン",
    content: JSON.stringify([
        {
            style: "normal",
            title: "その不用品の回収、お任せください！",
            isDisplay: true,
            content: [
                {
                    type: "image",
                    data: {
                        file: {
                            url: "image",
                        },
                        caption: "",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                    },
                },
            ],
        },
        {
            style: "with-background",
            title: "追加料金一切なし！",
            isDisplay: true,
            content: [
                {
                    type: "image",
                    data: {
                        file: {
                            url: "image2",
                        },
                        caption: "",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                    },
                },
            ],
        },
        {
            style: "list-service",
            title: "おたすけクリーンのお約束",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image3",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image4",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image5",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
            ],
        },
        {
            style: "image-gallery-caption",
            title: "サービス案内",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this <strong>project</strong> more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. We have been working on this project more than three years. We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "button",
                    data: {
                        style: "red",
                        name: "Button 1",
                    },
                },
            ],
        },
        {
            style: "image-gallery",
            title: "対応エリア",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
            ],
        },
        {
            style: "image-gallery",
            title: "対応エリア",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "image2",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
            ],
        },
        {
            style: "list-sub",
            title: "Title1",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "キャンペーン実施中！",
                        subTitle: "お得に不用品回収・買取をしませんか？",
                        listContent: [
                            {
                                title: "CAMPAIGN 01",
                                description1:
                                    "見積り時に「ホームページを見た」と お伝えいただければ",
                                description2: "最大10,000円",
                            },
                            {
                                title: "CAMPAIGN 02",
                                description1:
                                    "おたすけクリーンをご利用いただいた人の紹介なら",
                                description2: "3,000円OFF",
                            },
                        ],
                    },
                },
            ],
        },
    ]),
    type: 4
};
