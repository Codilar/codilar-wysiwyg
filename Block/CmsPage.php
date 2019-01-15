<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 11/1/19
 * Time: 11:28 AM
 */

namespace Codilar\Wysiwyg\Block;


use Magento\Framework\View\Element\Template;
use Magento\Cms\Model\PageFactory;
class CmsPage extends Template
{
    /**
     * @var PageFactory
     */
    private $pageFactory;

    /**
     * CmsPage constructor.
     * @param Template\Context $context
     * @param PageFactory $pageFactory
     * @param array $data
     */
    public function __construct(
        Template\Context $context,
        PageFactory $pageFactory,
        array $data = []
    )
    {
        parent::__construct($context, $data);
        $this->pageFactory = $pageFactory;
    }

    /**
     * @return mixed
     */
    public function getCmsPageId(){
        return $this->getRequest()->getParam('page_id');
    }

    /**
     * @return string
     */
    public function getPageContentData(){

        if($this->getCmsPageId() == null){
            return "";
        }
        else{
            return $this->pageFactory->create()->load($this->getCmsPageId())->getContent();
        }

    }
}