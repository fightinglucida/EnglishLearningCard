import React, { useState, useRef } from 'react';
import { Edit, Image as ImageIcon, Download, Type, Palette } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const EnglishCardGenerator = () => {
  // State for all card content
  const [title, setTitle] = useState('3000 篇每日英语听读: 起飞前安全播报');
  const [titleFont, setTitleFont] = useState('serif');
  const [titleColor, setTitleColor] = useState('#8B0000');
  const [englishText, setEnglishText] = useState(
    'Ladies and Gentlemen, welcome aboard this flight. The plane is about to take off. Please make sure once again that your seat belts are fastened, your seat backs are upright, and your electronic devices are switched to airplane mode or turned off. Our flight attendants will be at your service. Have a pleasant journey.'
  );
  const [textFont, setTextFont] = useState('sans-serif');
  const [textColor, setTextColor] = useState('#00008B');
  const [chineseText, setChineseText] = useState(
    '女士们，先生们，欢迎乘坐本次航班，飞机就要起飞了，请您再次确认系好安全带，座椅靠背直立，电子设备已调至飞行模式或已关闭，我们的乘务员将随时为您服务，祝您旅途愉快！'
  );
  const [wordDefinitions, setWordDefinitions] = useState(
    `make sure [meɪk ʃʊr] 确保;查明
once again [wʌns əˈɡen] 再一次
seat belts [siːt belts] 安全带;座椅安全带
fasten [ˈfæsn] 锁紧;扣牢;扣住;系紧
seat back [siːt bæk] 座椅靠背
upright [ˈʌpraɪt] 正直的;直立;支柱;垂直的
electronic devices 电子设备;电子器件;电子产品
switched [swɪtʃt] 打开;关闭;改变;转变;交换;调换
attendants [əˈtendənts] 服务员;侍者;参加者
turned off [tɜːrn ɒf] 关闭;使转变方向`
  );
  const [image, setImage] = useState('/api/placeholder/400/320');
  const [aspectRatio, setAspectRatio] = useState('3:4');
  
  const cardRef = useRef(null);
  
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Export card as image
  const exportCard = () => {
    // In a real implementation, this would use html2canvas or dom-to-image
    alert('In a full implementation, this would export the card as an image');
  };
  
  // Get card width based on aspect ratio
  const getCardStyle = () => {
    if (aspectRatio === '3:4') {
      return {
        width: '100%',
        maxWidth: '600px',
        aspectRatio: '3/4'
      };
    } else {
      return {
        width: '100%',
        maxWidth: '600px',
        aspectRatio: '9/16'
      };
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full p-4 gap-6 bg-gray-100">
      {/* Editor Panel */}
      <div className="w-full md:w-1/3 flex flex-col gap-4 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2 flex items-center">
          <Edit className="mr-2" size={20} />
          编辑内容
        </h2>
        
        {/* Title Settings */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">标题</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
          
          <div className="flex gap-2 mt-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Type size={16} className="inline mr-1" />
                标题字体
              </label>
              <select
                value={titleFont}
                onChange={(e) => setTitleFont(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans-serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </div>
            
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Palette size={16} className="inline mr-1" />
                标题颜色
              </label>
              <input
                type="color"
                value={titleColor}
                onChange={(e) => setTitleColor(e.target.value)}
                className="w-full p-1 h-10 border rounded"
              />
            </div>
          </div>
        </div>
        
        {/* English Text */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">英文正文</label>
          <textarea
            value={englishText}
            onChange={(e) => setEnglishText(e.target.value)}
            className="w-full p-2 border rounded h-32"
            placeholder="Enter English text (max 60 words)"
          />
          
          <div className="flex gap-2 mt-2">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Type size={16} className="inline mr-1" />
                文字字体
              </label>
              <select
                value={textFont}
                onChange={(e) => setTextFont(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="serif">Serif</option>
                <option value="sans-serif">Sans-serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </div>
            
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Palette size={16} className="inline mr-1" />
                文字颜色
              </label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full p-1 h-10 border rounded"
              />
            </div>
          </div>
        </div>
        
        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <ImageIcon size={16} className="inline mr-1" />
            上传图片
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded"
          />
        </div>
        
        {/* Chinese Translation */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">中文翻译</label>
          <textarea
            value={chineseText}
            onChange={(e) => setChineseText(e.target.value)}
            className="w-full p-2 border rounded h-32"
          />
        </div>
        
        {/* Word Definitions */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">重点单词释义</label>
          <textarea
            value={wordDefinitions}
            onChange={(e) => setWordDefinitions(e.target.value)}
            className="w-full p-2 border rounded h-40"
            placeholder="Format: word [pronunciation] definition"
          />
        </div>
        
        {/* Aspect Ratio */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">图片比例</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={aspectRatio === '3:4'}
                onChange={() => setAspectRatio('3:4')}
                className="mr-2"
              />
              3:4
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                checked={aspectRatio === '9:16'}
                onChange={() => setAspectRatio('9:16')}
                className="mr-2"
              />
              9:16
            </label>
          </div>
        </div>
        
        {/* Export Button */}
        <button
          onClick={exportCard}
          className="w-full p-3 bg-blue-600 text-white rounded-lg flex items-center justify-center"
        >
          <Download size={20} className="mr-2" />
          导出卡片
        </button>
      </div>
      
      {/* Preview Panel */}
      <div className="w-full md:w-2/3 flex justify-center">
        <div 
          ref={cardRef}
          style={getCardStyle()}
          className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          {/* Card Header/Title */}
          <div className="p-4 border-b text-center" style={{ borderColor: titleColor }}>
            <h1 style={{ fontFamily: titleFont, color: titleColor, fontWeight: 'bold' }} className="text-xl">
              {title}
            </h1>
          </div>
          
          {/* English Text */}
          <div className="p-4 border-b flex-grow" style={{ borderColor: textColor }}>
            <p style={{ fontFamily: textFont, color: textColor }}>
              {englishText}
            </p>
          </div>
          
          {/* Image */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src={image} alt="Illustration" className="w-full h-full object-cover" />
          </div>
          
          {/* Chinese Translation */}
          <div className="p-4 border-b" style={{ borderColor: '#333' }}>
            <p className="text-gray-800">
              {chineseText}
            </p>
          </div>
          
          {/* Word Definitions */}
          <div className="p-4 bg-gray-50 flex-grow">
            <div className="text-sm text-gray-700">
              {wordDefinitions.split('\n').map((line, i) => (
                <div key={i} className="mb-1">
                  <ReactMarkdown>{line}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
          
          {/* Page Number */}
          <div className="p-2 text-right text-xs text-gray-500">
            - 5 -
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishCardGenerator;