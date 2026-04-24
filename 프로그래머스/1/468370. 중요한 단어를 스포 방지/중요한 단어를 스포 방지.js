function solution(message, spoiler_ranges) {
    // 1. 단어 정보(텍스트, 시작 인덱스, 끝 인덱스) 추출
    const words = [];
    let regex = /\S+/g; // 공백이 아닌 연속된 문자열 찾기
    let match;
    
    while ((match = regex.exec(message)) !== null) {
        words.push({
            text: match[0],
            start: match.index,
            end: match.index + match[0].length - 1
        });
    }

    // 2. 각 단어가 어느 스포 방지 구간에 속하는지, 혹은 일반 구간인지 판별
    const spoilerWords = new Set(); // 스포 방지 단어들의 텍스트 저장
    const normalWords = new Set();  // 일반 구간에 등장하는 단어들의 텍스트 저장
    
    // 단어별로 스포 방지 구간 포함 여부 미리 계산
    const wordInfo = words.map(word => {
        let isSpoiler = false;
        let containedInRanges = [];

        spoiler_ranges.forEach((range, idx) => {
            // 단어의 일부라도 구간에 포함되는지 확인
            // (단어 시작 <= 구간 끝) && (단어 끝 >= 구간 시작)
            if (word.start <= range[1] && word.end >= range[0]) {
                isSpoiler = true;
                containedInRanges.push(idx);
            }
        });

        if (!isSpoiler) {
            normalWords.add(word.text);
        }
        return { ...word, isSpoiler, containedInRanges };
    });

    // 3. 스포 방지 구간을 순서대로 클릭하며 중요한 단어 카운트
    let importantCount = 0;
    const discoveredSpoilerWords = new Set(); // 이미 공개된 스포 방지 단어

    for (let i = 0; i < spoiler_ranges.length; i++) {
        // 현재 클릭한 구간(i)에 포함된 단어들을 순서대로 찾음
        for (let word of wordInfo) {
            if (word.isSpoiler && word.containedInRanges.includes(i)) {
                // 이 단어가 "이번 클릭으로 인해" 완전히 공개되는 형태가 아니라도, 
                // 규칙상 "스포 방지 구간에 포함된 단어"가 공개될 때 판단함
                
                // 중요한 단어 조건 체크:
                // 1. 일반 구간에 등장한 적이 없어야 함
                // 2. 이전에 공개된 스포 방지 단어와 중복되지 않아야 함
                if (!normalWords.has(word.text) && !discoveredSpoilerWords.has(word.text)) {
                    importantCount++;
                }
                
                // 공개된 단어 목록에 추가 (중복 방지용)
                if (word.isSpoiler) {
                    discoveredSpoilerWords.add(word.text);
                }
            }
        }
    }

    return importantCount;
}