<template>
    <div id="vip-tab_qna" class="vip-tabcontent vip-tabcontent_lt">
	<h3 class="tit_detailarea">상품 문의하기<span id="txtQnaCount" class="num"></span></h3>
	<div class="board_selectbox pos uxeselectbox" style="width:100px">
		<button class=""><span class="txt">제목</span><span class="arr blind">열기</span></button>
		<ul class="select-commont-list uxeselect_dropdown" style="display: none;" id="searchKindUl">
			<li><a href="javascript:;" data-search-kind="S">제목</a></li>
			<li><a href="javascript:;" data-search-kind="C">제목+내용</a></li>
		</ul>
	</div>
	<form id="inputSearchForm" action="">
		<fieldset>
			<legend>상품 문의하기 검색 폼</legend>
			<div class="board_schbox">
				<input type="text" class="ip_board-sch" id="inputSearch" title="검색어 입력">
				<input type="hidden" id="inputSearchKind" value="S">
				<button type="submit" class="btn_sch"><span class="blind">검색</span></button>
				<span class="txt_result" >총 검색 결과 <strong id="txtSearchCount"></strong></span>
			</div>
		</fieldset>
	</form>

	<div class="board_qna">
		<div class="board_btnswrap">
			<ul>
				<li class="bt_question">
					<a href="javascript:;" onclick="javascript:pdsClickLog('200000573', 'utility', {});openQnaWrite();" data-montelena-acode="200000573">문의하기</a>
				</li>
				<li class="tab_rt"><a href="javascript:pdsClickLog('200000575', 'utility', {});searchQna('my');" data-montelena-acode="200000575" class="my">내 문의보기</a></li>
				<li class="tab_rt"><a href="javascript:pdsClickLog('200000576', 'utility', {});searchQna('all');" data-montelena-acode="200000576" class="tl">전체 문의보기</a></li>
			</ul>
		</div>
		<div id="qnaList-wrapper"></div>
	</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>