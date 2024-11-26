<?php

/** @var yii\web\View $this */
use yii\helpers\Html;


$this->title = 'My Yii Application';
$this->registerCssFile("@web/css/style.css", [
  'media' => 'all',
], 'style');
$this->registerJs(
  "var cards = ".json_encode($cards),
  $this::POS_HEAD,
  'cards'
);
$this->registerJsFile(
  '@web/js/app.js',
  [
    'depends' => [\yii\web\JqueryAsset::class]
  ]
);
?>
<div class="site-index">
    <div class="d-flex justify-content-between cards-container m-2" id="cards-container"></div>
    <hr/>
    <div class="d-flex justify-content-between" id="cards">
      <?php foreach($cards as $card) : ?>
        <?php echo Html::img('@web/img/'.$card['img'], [
        'alt' => $card['name'],
        'class' => 'img-fluid cards__image',
        'data-id' => $card['id'],
        'draggable' => "true"
        ]) ?>
      <?php endforeach; ?>
    </div>
</div>
