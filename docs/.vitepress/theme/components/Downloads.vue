<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const REPO = 'adam-ikari/powerkit-web'

type Asset = { name: string; size: number; browser_download_url: string }

const state = ref<'loading' | 'ready' | 'none' | 'error'>('loading')
const tag = ref('')
const assets = ref<Asset[]>([])

const rows = computed(() =>
  assets.value.map((a) => ({ name: a.name, url: a.browser_download_url, fit: fit(a.name), size: mb(a.size) }))
)

function fit(name: string) {
  const arch = /arm64/i.test(name) ? 'ARM64（Windows on ARM）' : 'x64（Intel / AMD）'
  return /Setup/i.test(name) ? `${arch} · 安装版，per-user 免管理员权限` : `${arch} · 便携版，解压后直接运行 powerkit.exe`
}

function mb(size: number) {
  return `${(size / 1024 / 1024).toFixed(1)} MB`
}

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
    if (res.status === 404) {
      state.value = 'none'
      return
    }
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    tag.value = data.tag_name ?? ''
    assets.value = data.assets ?? []
    state.value = assets.value.length ? 'ready' : 'none'
  } catch {
    state.value = 'error'
  }
})
</script>

<template>
  <div class="pk-dl">
    <p v-if="state === 'loading'">正在读取发布信息…</p>

    <p v-else-if="state === 'none'">
      公开下载包尚未发布。发布后这里会列出安装版与便携版（x64 / ARM64）共四份包。
    </p>

    <p v-else-if="state === 'error'">无法连接 GitHub 获取发布信息，请稍后刷新重试。</p>

    <template v-else>
      <p>当前版本 <strong>{{ tag }}</strong>，按需取用：</p>
      <table>
        <thead>
          <tr>
            <th>文件</th>
            <th>适用</th>
            <th>大小</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.name">
            <td><a :href="r.url">{{ r.name }}</a></td>
            <td>{{ r.fit }}</td>
            <td>{{ r.size }}</td>
          </tr>
        </tbody>
      </table>
    </template>

    <p class="pk-dl-note">
      安装版与便携版是同一份程序，配置都写在 <code>HKCU\Software\PowerKit</code>；程序不联网，
      不上传任何数据。
    </p>
  </div>
</template>

<style scoped>
.pk-dl {
  margin: 24px 0;
}

.pk-dl-note {
  margin-top: 16px;
  font-size: 13px;
  color: var(--vp-c-text-2);
}
</style>
