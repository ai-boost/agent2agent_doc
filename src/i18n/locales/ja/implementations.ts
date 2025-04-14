export default {
  "title": "実装とライブラリ",
  "officialSamples": {
    "title": "公式サンプル",
    "description": "これらは基本的なA2Aクライアント/サーバー通信を示しています。",
    "table": {
      "headers": {
        "language": "言語",
        "type": "タイプ",
        "framework": "フレームワーク",
        "description": "説明"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "type": "共通ライブラリ",
          "framework": "-",
          "description": "コアHTTP、JSON-RPC、SSE処理"
        },
        {
          "language": "🐍 Python",
          "type": "ホスト（クライアント）",
          "framework": "CLI",
          "description": "コマンドラインクライアント例"
        },
        {
          "language": "🐍 Python",
          "type": "ホスト（エージェント）",
          "framework": "ADK",
          "description": "A2Aエージェントに委譲するオーケストレーターエージェント"
        },
        {
          "language": "🚀 JS/TS",
          "type": "サーバーライブラリ",
          "framework": "Express",
          "description": "コアサーバー実装"
        },
        {
          "language": "🚀 JS/TS",
          "type": "クライアントライブラリ",
          "framework": "-",
          "description": "クライアント実装"
        },
        {
          "language": "🚀 JS/TS",
          "type": "ホスト（クライアント）",
          "framework": "CLI",
          "description": "コマンドラインクライアント例"
        }
      ]
    }
  },
  "frameworkIntegrations": {
    "title": "フレームワーク統合（公式サンプル）",
    "description": "これらは特定のフレームワークで構築されたエージェントがA2Aインターフェースを公開する方法を示しています。",
    "table": {
      "headers": {
        "language": "言語",
        "framework": "エージェントフレームワーク",
        "description": "エージェントの説明",
        "features": "実証されている主要なA2A機能"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "framework": "LangGraph",
          "description": "通貨換算",
          "features": "ツール、ストリーミング、マルチターン"
        },
        {
          "language": "🐍 Python",
          "framework": "CrewAI",
          "description": "画像生成",
          "features": "非テキストアーティファクト（ファイル）"
        },
        {
          "language": "🐍 Python",
          "framework": "Google ADK",
          "description": "経費精算",
          "features": "マルチターン、フォーム（DataPart）"
        },
        {
          "language": "🚀 JS/TS",
          "framework": "Genkit",
          "description": "映画情報/コード生成",
          "features": "ツール、アーティファクト（ファイル）、非同期"
        }
      ]
    }
  },
  "communityImplementations": {
    "title": "コミュニティ実装",
    "comingSoon": "コミュニティ実装は利用可能になり次第、ここに掲載されます。"
  }
};