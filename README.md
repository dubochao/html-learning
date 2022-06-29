<a id="cb_post_title_url" class="postTitle2 vertical-middle" href="https://www.cnblogs.com/geeksongs/p/10606906.html">
    <span role="heading" aria-level="2">Git学习：如何登陆以及创建本地代码仓库、并提交本地代码至Github(最简单方法)</span>
    
</a>

            </h1>
            <div class="clear"></div>
            <div class="postBody">
                <div id="cnblogs_post_body" class="blogpost-body blogpost-body-html">
<p>在我们的实际开发当中，代码经常会被公司要求上传到网络上，能够大家共同完成一个项目，因此掌握git技能也是一项必不可少的技能了，这里我们来学习以下基本的git操作。首先我们要想使用git这个东西需要把它安装好，具体安装的部分可参见其他大佬的博客：https://blog.csdn.net/sishen47k/article/details/80211002</p>
<p><strong><span style="font-size: 14pt">第一步.登录</span></strong></p>
<p>在我们的git操作当中，登录和注册是一体化的，直接在命令行模式下输入自己的用户名和登录的邮箱即可，首先我们的点击电脑上的“win”键，然后搜索git bash，打开之后就是我们的命令行界面了。<br>需要输入的代码如下，每输入一行代码就按下一个回车键即可：</p>
<div class="cnblogs_code">
<pre>git config --<span style="color: rgba(0, 0, 255, 1)">global</span> user.name <span style="color: rgba(128, 0, 0, 1)">"</span><span style="color: rgba(128, 0, 0, 1)">(你自己的登录名)</span><span style="color: rgba(128, 0, 0, 1)">"</span><span style="color: rgba(0, 0, 0, 1)">
git config </span>--<span style="color: rgba(0, 0, 255, 1)">global</span> user.emial <span style="color: rgba(128, 0, 0, 1)">"</span><span style="color: rgba(128, 0, 0, 1)">(你自己用的登陆邮箱)</span><span style="color: rgba(128, 0, 0, 1)">"</span></pre>
</div>
<p>注意：在user.name和user.email之后一定要打一个空格，再打上双引号，不然的话是不会登录成功的！！如果想确认自己已经登陆成功了，则可以输入代码：</p>
<div class="cnblogs_code">
<pre>git config --<span style="color: rgba(0, 0, 255, 1)">global</span> user.name</pre>
</div>
<p>回车之后出现你自己的登录名则已经登陆成功，同理可得email的情况，两者同时成功才会真正的登陆成功。</p>
<p><strong><span style="font-size: 14pt">第二步.创建本地代码仓库</span></strong></p>
<p>首先我们来到需要创建代码仓库的地方，这个时候所使用的命令和我们的win下的cmd是大致相似的，因为笔者想使用的文件在F：androidapk/xihguanni文件夹下，因此需要输入以下代码：</p>
<div class="cnblogs_code">
<pre>cd F:</pre>
</div>
<p>回车，再输入：</p>
<div class="cnblogs_code">
<pre>androidapk/xihuanni</pre>
</div>
<p>如图所示：</p>
<p><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327131749963-456352665.png" alt=""></p>
<p>这样就进入到了我们需要创建代码仓库的文件目录下了。</p>
<p>然后输入命令：</p>
<div class="cnblogs_code">
<pre>git init</pre>
</div>
<p>这样就完成了创建代码仓库的操作，创建完之后会在androidapk/xihuanni文件夹下生成一个隐藏的git文件夹，这个文件夹就是用来记录git操作的，如图所示：</p>
<p><br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327132146165-942920548.png" alt=""></p>
<p>&nbsp;</p>
<p>仓库创建完成之后我们可以通过ls -al&nbsp;命令来查看一下所有的Git操作，如图所示：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327132314237-1114155176.png" alt="" width="804" height="390"></p>
<p><strong><span style="font-size: 14pt">第三步.提交本地代码：</span></strong><br>代码仓库创建完成之后就可以十分顺利地进行提交本地的代码了，首先我们需要在github上找到和我们相连接的https链接，首先在github上创建一个代码仓库，创建好之后找到clone and download，如下图所示：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327215151154-1619851460.png" alt="" width="1044" height="388"></p>
<p>点击之后就会出现Clone with https的字样，然后我们将下面的https://github.........的链接复制，你的链接和我的是不一样的。这个时候我们再在git bash上输入代码：</p>
<div class="cnblogs_code">
<pre>git clone https:<span style="color: rgba(0, 128, 0, 1)">//</span><span style="color: rgba(0, 128, 0, 1)">github.com/Geeksongs/biaobai.git</span></pre>
</div>
<p>如图所示：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327215547632-283108333.png" alt=""></p>
<p>这个时候我们电脑上的文件目录下就会出现我们刚刚在github上所创建的仓库名所表示的文件夹，如下图所示，我们把以前的文件和文件夹都复制到这个新出现的文件夹里：</p>
<p><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327215735019-879727903.png" alt=""></p>
<p>然后再到命令行模式里将文件的目录切换到该文件夹里，即biaobai里：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327215903833-758207672.png" alt="" width="707" height="61"></p>
<p>然后添加该文件夹下所有的代码到git本地仓库里。输入以下代码：</p>
<div class="cnblogs_code">
<pre>git add .</pre>
</div>
<p>注意add&nbsp;之后的“.”之前是有一个空格的，没有空格的话这句话是没有任何效用的。此时再把我们的代码同步到git上：</p>
<div class="cnblogs_code">
<pre>git commit -m <span style="color: rgba(128, 0, 0, 1)">"</span><span style="color: rgba(128, 0, 0, 1)">First commit</span><span style="color: rgba(128, 0, 0, 1)">"</span></pre>
</div>
<p>出现以下情况：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327220231331-963924270.png" alt="" width="843" height="701"></p>
<p>最后，棋差一着，再写上：</p>
<div class="cnblogs_code">
<pre>git push -u origin master</pre>
</div>
<p>这个时候就是把代码全部递交到github上的时候了，但是系统会要求你输入你github的用户名和密码，由于笔者下载了github的客户端，因此在跳出的客户端当中输入：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327220428759-1157442641.png" alt=""></p>
<p>没有安装客户端的也没有关系，因为你也可以直接在命令行模式进行输入，登陆成功即可。</p>
<p>一旦登陆成功，则会进行代码上传github，最后上床成功的界面如下：<br><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327220543256-1802886057.png" alt="" width="762" height="229"></p>
<p>这个时候您所新建的github仓库就会和您自己本地的代码文件一模一样了，</p>
<p><img src="https://img2018.cnblogs.com/blog/1363478/201903/1363478-20190327220700641-404799027.png" alt=""></p>
<p>&nbsp;</p>
<p>得解也！！<br><br></p>
</div>