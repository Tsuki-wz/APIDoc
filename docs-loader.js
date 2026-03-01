// 文档结构配置 - 完整扁平化版本
const docsStructure = {
    "引言": "docs/Docs/引言.md",
    "在线调试说明": "docs/Docs/在线调试说明.md",
    "发出请求": "docs/Docs/发出请求.md",
    
    "中转站基本介绍": {
        "API 快速开始指南": "docs/Docs/中转站基本介绍/API 快速开始指南.md",
        "联系客服": "docs/Docs/中转站基本介绍/联系客服.md",
        "分组详细表格": "docs/Docs/中转站基本介绍/分组详细表格.md",
        "分组的特殊性及价格差异": "docs/Docs/中转站基本介绍/分组的特殊性及价格差异.md",
        "如何新建指定分组的令牌": "docs/Docs/中转站基本介绍/如何新建指定分组的令牌.md",
        "代理接口调用地址": "docs/Docs/中转站基本介绍/代理接口调用地址.md",
        "API Key 额度查询服务": "docs/Docs/中转站基本介绍/API Key 额度查询服务.md",
        "免费AI聊天项目导航": "docs/Docs/中转站基本介绍/免费AI聊天项目导航.md"
    },
    
    "聊天(Chat)": {
        "ChatGpt接口": {
            "聊天完成对象": "docs/Docs/聊天Chat/ChatGpt接口/ChatGPT聊天Chat/聊天完成对象.md",
            "聊天完成块对象": "docs/Docs/聊天Chat/ChatGpt接口/ChatGPT聊天Chat/聊天完成块对象.md",
            "完成对象": "docs/Docs/聊天Chat/ChatGpt接口/ChatGPT自动补全Completions/完成对象.md",
            "嵌入对象": "docs/Docs/聊天Chat/ChatGpt接口/ChatGPT嵌入Embeddings/嵌入对象.md"
        },
        "Anthropic_Claude接口": {
            "聊天完成对象": "docs/Docs/聊天Chat/Anthropic_Claude接口/聊天完成对象.md",
            "聊天完成块对象": "docs/Docs/聊天Chat/Anthropic_Claude接口/聊天完成块对象.md"
        }
    },
    
    "聊天(Responses)": {
        "Responses API与Chat API对比": "docs/Docs/聊天Responses/Responses API与Chat API对比.md"
    },
    
    "绘画模型": {
        "README": "docs/Docs/绘画模型/README.md",
        "图像对象": "docs/Docs/绘画模型/图像对象.md",
        "FLUX系列": {
            "Flux 分辨率": "docs/Docs/绘画模型/FLUX系列/Replicate官方格式/Flux 分辨率.md",
            "接入教程": "docs/Docs/绘画模型/FLUX系列/Replicate官方格式/接入教程.md"
        },
        "Fal.ai平台": {
            "状态码": "docs/Docs/绘画模型/Fal.ai平台/状态码.md"
        },
        "腾讯AIGC生图": {
            "状态码": "docs/Docs/绘画模型/腾讯AIGC生图/状态码.md"
        }
    },
    
    "视频模型": {
        "veo视频生成": {
            "状态码": "docs/Docs/视频模型/veo视频生成/视频统一格式/状态码.md"
        },
        "luma视频生成": {
            "状态码": "docs/Docs/视频模型/luma视频生成/官方API格式/状态码.md"
        },
        "Runway视频生成": {
            "状态码": "docs/Docs/视频模型/Runway视频生成/状态码.md"
        },
        "海螺视频生成": {
            "状态码": "docs/Docs/视频模型/海螺视频生成/状态码.md"
        },
        "grok视频生成": {
            "状态码": "docs/Docs/视频模型/grok视频生成/视频统一格式/状态码.md"
        },
        "腾讯AIGC视频生成": {
            "状态码": "docs/Docs/视频模型/腾讯AIGC视频生成/状态码.md"
        }
    },
    
    "GPTs相关": {
        "简介": "docs/Docs/GPTs相关/简介.md"
    },
    
    "系统API": {
        "获取令牌列表": "docs/API_Docs/api-278499776.md",
        "新增令牌": "docs/API_Docs/api-278500390.md",
        "修改令牌": "docs/API_Docs/api-356116138.md",
        "删除令牌": "docs/API_Docs/api-356116177.md",
        "搜索令牌": "docs/API_Docs/api-356116296.md",
        "获取令牌支持模型": "docs/API_Docs/api-301363879.md",
        "获取账号信息": "docs/API_Docs/api-303316036.md",
        "获取令牌使用情况": "docs/API_Docs/api-416239678.md",
        "上传图片": "docs/API_Docs/api-277975070.md"
    },
     "文生音乐Suno": {
        "说明": "docs/Docs/文生音乐Suno/说明.md",
        "参数": "docs/Docs/文生音乐Suno/参数.md",
        "生成歌曲(灵感模式)": "docs/API_Docs/api-248983692.md",
        "生成歌词": "docs/API_Docs/api-248983798.md",
        "歌曲拼接": "docs/API_Docs/api-248984121.md",
        "批量获取任务": "docs/API_Docs/api-248984125.md",
        "查询单个任务": "docs/API_Docs/api-248984180.md",
        "生成歌曲(自定义模式)": "docs/API_Docs/api-305049181.md",
        "生成歌曲(续写模式)": "docs/API_Docs/api-305049317.md",
        "生成歌曲(歌手风格)": "docs/API_Docs/api-305049365.md",
        "生成歌曲(上传歌曲二次创作)": "docs/API_Docs/api-305049403.md",
        "生成歌曲(拼接歌曲)": "docs/API_Docs/api-305049407.md",
        "Timing:歌词、音频时间线": "docs/API_Docs/api-408281974.md",
        "场景详情获取": "docs/API_Docs/api-408764477.md",
        "场景一: 灵感模式": "docs/API_Docs/api-408841413.md",
        "场景二: 自定义.歌词歌名": "docs/API_Docs/api-408842497.md",
        "场景三: 纯音乐.自定义": "docs/API_Docs/api-408850611.md"
    },
    
    "Rerank重排序模型": {
        "重排序": "docs/API_Docs/api-319966930.md"
    },
    
    "可灵Kling平台": {
        "Callback协议": "docs/Docs/可灵Kling平台/Callback协议.md"
    },
    
    "海螺Minimax平台": {
        "创建视频": "docs/API_Docs/api-385288046.md",
        "查询任务": "docs/API_Docs/api-385288050.md",
        "使用故事板创建视频": "docs/API_Docs/api-385627774.md"
    },
    
    "vidu平台 视频生成、图片生成、音频生成": {
        "状态码": "docs/Docs/vidu平台/状态码.md"
    },
    
    "Replicate聚合平台": {
        "接入教程": "docs/Docs/Replicate聚合平台/接入教程.md",
        "Flux 分辨率": "docs/Docs/Replicate聚合平台/Flux 分辨率.md"
    },
    
    "Fal-ai聚合平台": {
        "接入教程": "docs/Docs/Fal-ai聚合平台/接入教程.md"
    },
    
    "php配置方式": {
        "php使用图片编辑demo": "docs/Docs/php配置方式/php使用图片编辑demo.md"
    },
    
    "nodejs配置方式": {
        "nodejs 基础对话": "docs/Docs/nodejs配置方式/nodejs 基础对话.md"
    },
    
    "Python配置方式": {
        "python 使用 语音转文本": "docs/Docs/Python配置方式/python 使用 语音转文本.md",
        "python 使用文本转语音": "docs/Docs/Python配置方式/python 使用文本转语音.md",
        "python 使用Embeddings 向量化": "docs/Docs/Python配置方式/python 使用Embeddings 向量化.md",
        "python 调用DALL·E": "docs/Docs/Python配置方式/python 调用DALL·E.md",
        "python简单调用 openai function-calling demo": "docs/Docs/Python配置方式/python简单调用 openai function-calling demo.md",
        "python 简单langchain 调用openai demo": "docs/Docs/Python配置方式/python 简单langchain 调用openai demo.md",
        "python llama_index 配置": "docs/Docs/Python配置方式/python llama_index 配置.md",
        "Python基础对话": "docs/Docs/Python配置方式/Python基础对话.md",
        "Python使用gpt-4o识别图片-本地图片": "docs/Docs/Python配置方式/Python使用gpt-4o识别图片-本地图片.md",
        "Python使用gpt-4o识别图片": "docs/Docs/Python配置方式/Python使用gpt-4o识别图片.md",
        "Python使用Claude识别图片": "docs/Docs/Python配置方式/Python使用Claude识别图片.md",
        "python 库流式输出": "docs/Docs/Python配置方式/python 库流式输出.md",
        "gpt realtime模型调用": "docs/Docs/Python配置方式/gpt realtime模型调用.md",
        "python request 请求 流式输出demo": "docs/Docs/Python配置方式/python request 请求 流式输出demo.md",
        "python 使用gpt-image-1 创建编辑图片": "docs/Docs/Python配置方式/python 使用gpt-image-1 创建编辑图片.md",
        "python openai官方库": "docs/Docs/Python配置方式/python openai官方库（使用AutoGPT，langchain等）.md",
        "python 连续对话": "docs/Docs/Python配置方式/python 连续对话.md"
    },
    
    "各种插件/软件使用教程": {
        "Codex 配置教程": "docs/Docs/各种插件软件使用教程/Codex 配置教程.md",
        "OpenClaw Clawdbot 配置": "docs/Docs/各种插件软件使用教程/OpenClaw Clawdbot 自定义中转站配置教程.md",
        "N8N 工作流教程": "docs/Docs/各种插件软件使用教程/N8N 工作流使用中转API 教程.md",
        "opencode 配置教程": "docs/Docs/各种插件软件使用教程/opencode 配置教程.md",
        "Gemini CLI 配置": "docs/Docs/各种插件软件使用教程/Gemini CLI 中转站配置使用教程.md",
        "Claude Code 安装教程": "docs/Docs/各种插件软件使用教程/Claude Code 安装使用教程.md",
        "CherryStudio调用MCP": "docs/Docs/各种插件软件使用教程/CherryStudio调用cluade MCP.md",
        "Cherry Studio配置教程": "docs/Docs/各种插件软件使用教程/Cherry Studio配置教程.md",
        "Cherry Studio配置 banana pro": "docs/Docs/各种插件软件使用教程/Cherry Studio配置 banana pro 4K和分辨率教程.md",
        "CherryStudio配置o4": "docs/Docs/各种插件软件使用教程/CherryStudio配置o4推理级别.md",
        "扣子工作流配置": "docs/Docs/各种插件软件使用教程/扣子工作流简单配置从输入到获取url.md",
        "dify添加模型": "docs/Docs/各种插件软件使用教程/dify添加模型.md",
        "cline 配置教程": "docs/Docs/各种插件软件使用教程/cline 配置教程.md",
        "aider 配置教程": "docs/Docs/各种插件软件使用教程/aider 配置教程.md",
        "Cursor 配置教程": "docs/Docs/各种插件软件使用教程/Cursor 配置教程.md",
        "lobechat 设置教程": "docs/Docs/各种插件软件使用教程/lobechat 设置教程.md",
        "ChatBox": "docs/Docs/各种插件软件使用教程/ChatBox(推荐使用).md",
        "开源gpt_academic": "docs/Docs/各种插件软件使用教程/开源gpt_academic.md",
        "nextchat 设置教程": "docs/Docs/各种插件软件使用教程/nextchat 设置教程.md",
        "zotero gpt 配置": "docs/Docs/各种插件软件使用教程/zotero gpt 配置方法.md",
        "CLAUDE DEV 配置": "docs/Docs/各种插件软件使用教程/CLAUDE DEV 配置教程.md",
        "沉浸式翻译": "docs/Docs/各种插件软件使用教程/沉浸式翻译 设置gpt翻译.md",
        "ChatGPT Sidebar": "docs/Docs/各种插件软件使用教程/浏览器插件ChatGPT Sidebar.md",
        "chatgpt-on-wechat": "docs/Docs/各种插件软件使用教程/chatgpt-on-wechat 配置教程.md",
        "GPT Academic": "docs/Docs/各种插件软件使用教程/chatgpt GPT Academic 学术优化配置gpt教程.md",
        "RikkaHub 配置": "docs/Docs/各种插件软件使用教程/RikkaHub 配置教程.md",
        "coze 工作流": "docs/Docs/各种插件软件使用教程/coze 工作流使用中转API 教程.md",
        "n8n 工作流视频例子": "docs/Docs/各种插件软件使用教程/n8n 工作流获取本地图片生成视频例子.md",
        "OpenClaw 最新版本": "docs/Docs/各种插件软件使用教程/OpenClaw 最新版本 自定义中转站配置教程.md"
    },
    
    "帮助中心": {
        "AI返回字段: 思考相关": "docs/Docs/帮助中心/AI返回字段_ 思考相关.md",
        "HTTP状态码及其含义": "docs/Docs/帮助中心/HTTP状态码及其含义.md",
        "自建图床API": "docs/Docs/帮助中心/自建图床API.md"
    }
};

function generateNav(structure, container, level = 0) {
    for (const [key, value] of Object.entries(structure)) {
        if (typeof value === 'string') {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = key;
            a.dataset.path = value;
            a.onclick = (e) => {
                e.preventDefault();
                loadDoc(value);
            };
            li.appendChild(a);
            container.appendChild(li);
        } else {
            const section = document.createElement('div');
            section.className = 'nav-section';
            const h3 = document.createElement('h3');
            h3.textContent = key;
            h3.style.cursor = 'pointer';
            const ul = document.createElement('ul');
            ul.style.display = 'block';
            h3.onclick = () => {
                const isCollapsed = ul.classList.contains('collapsed');
                if (isCollapsed) {
                    ul.classList.remove('collapsed');
                    h3.classList.remove('collapsed');
                    ul.style.maxHeight = ul.scrollHeight + 'px';
                } else {
                    ul.classList.add('collapsed');
                    h3.classList.add('collapsed');
                    ul.style.maxHeight = '0';
                }
            };
            section.appendChild(h3);
            generateNav(value, ul, level + 1);
            ul.style.maxHeight = ul.scrollHeight + 'px';
            section.appendChild(ul);
            container.appendChild(section);
        }
    }
}

async function loadDoc(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error('文档加载失败');
        const markdown = await response.text();
        const html = marked.parse(markdown);
        document.getElementById('content').innerHTML = html;
        document.querySelectorAll('.nav-menu a').forEach(a => {
            a.classList.remove('active');
            if (a.dataset.path === path) a.classList.add('active');
        });
        window.scrollTo(0, 0);
    } catch (error) {
        document.getElementById('content').innerHTML = '<div class="error"><h2>加载失败</h2><p>' + error.message + '</p></div>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('docNav');
    generateNav(docsStructure, navContainer);
    loadDoc('docs/Docs/引言.md');
});

(function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') body.classList.add('dark-mode');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
})();

